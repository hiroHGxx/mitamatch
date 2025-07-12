import Phaser from 'phaser';

class PocScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PocScene' });
    }

    preload() {
        // ここでアセットを読み込む（今回はなし）
    }

    create() {
        this.add.text(10, 10, 'Phaser is running!', { color: '#ffffff' });

        const actionButton = document.getElementById('action-button');
        if (actionButton) {
            actionButton.addEventListener('click', () => {
                console.log('Action button was clicked!');
                this.add.text(10, 50, 'Button clicked!', { color: '#00ff00' });
            });
        }
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