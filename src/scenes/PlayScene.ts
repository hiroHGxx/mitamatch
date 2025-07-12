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
        });

        this.events.on('clean', () => {
            this.gameLogic.clean();
        });

        this.events.on('play', () => {
            this.gameLogic.play();
        });
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
