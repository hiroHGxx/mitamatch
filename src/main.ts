import Phaser from 'phaser';

class PocScene extends Phaser.Scene {
    private pet?: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: 'PocScene' });
    }

    preload() {
        this.load.image('egg', 'assets/sprites/egg.png');
        this.load.image('baby', 'assets/sprites/baby.png');
    }

    create() {
        this.pet = this.add.sprite(400, 300, 'egg').setInteractive();

        this.input.on('pointerdown', () => {
            if (this.pet?.texture.key === 'egg') {
                this.pet.setTexture('baby');
                console.log('Evolved to baby!');
            } else {
                this.pet?.setTexture('egg');
                console.log('Reverted to egg!');
            }
        });
    }
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: [PocScene]
};

new Phaser.Game(config);
