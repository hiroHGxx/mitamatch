import Phaser from 'phaser';
import { UIController } from '../ui/UIController';

export class PlayScene extends Phaser.Scene {
    private pet?: Phaser.GameObjects.Sprite;
    private uiController?: UIController;

    constructor() {
        super({ key: 'PlayScene' });
    }

    preload() {
        this.load.image('egg', 'assets/sprites/egg.png');
        this.load.image('baby', 'assets/sprites/baby.png');
    }

    create() {
        this.pet = this.add.sprite(400, 300, 'egg').setInteractive();

        this.uiController = new UIController(this);
        this.uiController.createUI();

        // PoCのクリックイベントは一旦コメントアウト
        // this.input.on('pointerdown', () => {
        //     if (this.pet?.texture.key === 'egg') {
        //         this.pet.setTexture('baby');
        //     } else {
        //         this.pet?.setTexture('egg');
        //     }
        // });
    }
}
