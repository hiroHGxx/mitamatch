import Phaser from 'phaser';
import { UIController } from '../ui/UIController';
import { GameLogic } from '../game/GameLogic';

export class PlayScene extends Phaser.Scene {
    private pet?: Phaser.GameObjects.Sprite;
    private uiController!: UIController;
    private gameLogic!: GameLogic;

    constructor() {
        super({ key: 'PlayScene' });
    }

    preload() {
        this.load.image('egg', 'assets/sprites/egg.png');
        this.load.image('baby', 'assets/sprites/baby.png');
    }

    create() {
        this.pet = this.add.sprite(400, 300, 'egg').setInteractive();

        this.gameLogic = new GameLogic();
        this.uiController = new UIController(this);
        this.uiController.createUI();

        this.setupEventListeners();
        this.updateUI();
    }

    update(time: number, delta: number) {
        this.gameLogic.update(delta);
        this.updateUI();
        this.updatePetSprite();
    }

    private setupEventListeners() {
        this.events.on('feed', () => {
            this.gameLogic.feed();
            this.triggerEvent();
        });

        this.events.on('clean', () => {
            this.gameLogic.clean();
            this.triggerEvent();
        });

        this.events.on('play', () => {
            this.gameLogic.play();
            this.triggerEvent();
        });

        this.events.on('share', () => {
            this.shareGame();
        });
    }

    private shareGame() {
        this.game.renderer.snapshot(async (image: Phaser.Display.Color | HTMLImageElement) => {
            if (!(image instanceof HTMLImageElement)) {
                alert('スクリーンショットの作成に失敗しました。');
                return;
            }

            // スナップショットからBlobを作成するために一時的なCanvasを使用
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext('2d');
            if (!context) {
                alert('スクリーンショットの作成に失敗しました。');
                return;
            }
            context.drawImage(image, 0, 0);

            canvas.toBlob(async (blob) => {
                if (!blob) {
                    alert('スクリーンショットの作成に失敗しました。');
                    return;
                }

                const file = new File([blob], 'mitamatch-screenshot.png', { type: 'image/png' });
                const shareData = {
                    title: 'ミタマっち',
                    text: 'ミタマっちで遊んでるよ！ #ミタマっち',
                    files: [file],
                };

                if (navigator.canShare && navigator.canShare(shareData)) {
                    try {
                        await navigator.share(shareData);
                    } catch (err) {
                        if ((err as Error).name !== 'AbortError') {
                            console.error('Share failed:', err);
                            alert('共有に失敗しました。');
                        }
                    }
                } else {
                    alert('このブラウザでは共有機能を利用できません。');
                }
            }, 'image/png');
        });
    }

    private triggerEvent() {
        const fact = this.gameLogic.triggerFunFact();
        if (fact) {
            this.uiController.showFunFact(fact);
        }
    }

    private updateUI() {
        const status = this.gameLogic.getStatus();
        this.uiController.updateMeters(status);
    }

    private updatePetSprite() {
        const currentPhase = this.gameLogic.getPhase();
        if (this.pet && this.pet.texture.key !== currentPhase) {
            this.pet.setTexture(currentPhase);
        }
    }
}
