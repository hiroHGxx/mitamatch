import type { PetStatus, PetPhase } from '../types/game';

export class GameLogic {
    private status: PetStatus;
    private phase: PetPhase;

    // 時間管理用の内部カウンター (ms)
    private timeSinceLastDecrease: number;
    private timeInGoodCondition: number;

    constructor() {
        this.status = {
            hungry: 100,
            clean: 100,
            mood: 100,
        };
        this.phase = 'egg';
        this.timeSinceLastDecrease = 0;
        this.timeInGoodCondition = 0;
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

        // 10秒ごとに各ステータスが1減少する
        if (this.timeSinceLastDecrease >= 10000) {
            this.status.hungry = Math.max(0, this.status.hungry - 1);
            this.status.clean = Math.max(0, this.status.clean - 1);
            this.status.mood = Math.max(0, this.status.mood - 1);
            this.timeSinceLastDecrease -= 10000; // 経過時間をリセット（余りを保持）
        }

        this.checkEvolution(delta);
    }

    private checkEvolution(delta: number) {
        const isGoodCondition = this.status.hungry > 90 && this.status.clean > 90 && this.status.mood > 90;

        if (isGoodCondition) {
            this.timeInGoodCondition += delta;
        } else {
            // 条件が満たされなくなったらリセット
            this.timeInGoodCondition = 0;
        }

        if (this.phase === 'egg' && this.timeInGoodCondition >= 30000) { // 30秒
            this.phase = 'baby';
            console.log('Evolved to baby!');
        }
    }
}
