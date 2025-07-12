import Phaser from 'phaser';

export class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScene' });
    }

    create() {
        this.add.text(400, 300, 'ミタマっち', { fontSize: '64px', color: '#ffffff' }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('PlayScene');
        });
    }
}
