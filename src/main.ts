import Phaser from 'phaser';
import { TitleScene } from './scenes/TitleScene';
import { PlayScene } from './scenes/PlayScene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: [TitleScene, PlayScene]
};

new Phaser.Game(config);