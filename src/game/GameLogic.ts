import type { PetStatus, PetPhase, SaveData } from '../types/game';
import { Storage } from '../utils/Storage';

export class GameLogic {
    private status: PetStatus;
    private phase: PetPhase;

    private timeSinceLastDecrease: number;
    private timeInGoodCondition: number;
    private timeSinceLastSave: number;

    constructor() {
        const saveData = Storage.load();

        if (saveData) {
            this.status = saveData.status;
            this.phase = saveData.phase;
            // オフライン中の経過時間を計算してステータスを減らす
            const offlineMillis = Date.now() - saveData.lastPlayed;
            const offlineDecreaseCount = Math.floor(offlineMillis / 10000);
            this.status.hungry = Math.max(0, this.status.hungry - offlineDecreaseCount);
            this.status.clean = Math.max(0, this.status.clean - offlineDecreaseCount);
            this.status.mood = Math.max(0, this.status.mood - offlineDecreaseCount);
        } else {
            this.status = {
                hungry: 100,
                clean: 100,
                mood: 100,
            };
            this.phase = 'egg';
        }

        this.timeSinceLastDecrease = 0;
        this.timeInGoodCondition = 0;
        this.timeSinceLastSave = 0;
    }

    public getStatus(): PetStatus {
        return this.status;
    }

    public getPhase(): PetPhase {
        return this.phase;
    }

    public feed(): void {
        this.status.hungry = Math.min(100, this.status.hungry + 10);
    }

    public clean(): void {
        this.status.clean = Math.min(100, this.status.clean + 10);
    }

    public play(): void {
        this.status.mood = Math.min(100, this.status.mood + 10);
    }

    public update(delta: number) {
        this.timeSinceLastDecrease += delta;
        this.timeSinceLastSave += delta;

        if (this.timeSinceLastDecrease >= 10000) {
            this.status.hungry = Math.max(0, this.status.hungry - 1);
            this.status.clean = Math.max(0, this.status.clean - 1);
            this.status.mood = Math.max(0, this.status.mood - 1);
            this.timeSinceLastDecrease -= 10000;
        }

        // 5秒ごとにオートセーブ
        if (this.timeSinceLastSave >= 5000) {
            this.saveGame();
            this.timeSinceLastSave = 0;
        }

        this.checkEvolution(delta);
    }

    private saveGame() {
        const saveData: SaveData = {
            version: 1,
            phase: this.phase,
            status: this.status,
            lastPlayed: Date.now(),
        };
        Storage.save(saveData);
        console.log('Game saved!');
    }

    private checkEvolution(delta: number) {
        const isGoodCondition = this.status.hungry > 90 && this.status.clean > 90 && this.status.mood > 90;

        if (isGoodCondition) {
            this.timeInGoodCondition += delta;
        } else {
            this.timeInGoodCondition = 0;
        }

        if (this.phase === 'egg' && this.timeInGoodCondition >= 30000) { // 30秒
            this.phase = 'baby';
            console.log('Evolved to baby!');
        }
    }

    public triggerFunFact(): string | null {
        const funFacts = [
            '布団が吹っ飛んだ！',
            'アルミ缶の上にあるミカン',
            '猫が寝込んだ',
            'イルカはいるか？',
            'パンダの好きなパンは？…フライパン！'
        ];

        // 20%の確率でイベント発生
        if (Math.random() < 0.2) {
            return funFacts[Math.floor(Math.random() * funFacts.length)];
        }
        return null;
    }
}
