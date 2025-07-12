import { describe, it, expect } from 'vitest';
import { GameLogic } from './GameLogic';

describe('GameLogic', () => {
    it('should initialize with default status', () => {
        const gameLogic = new GameLogic();
        const status = gameLogic.getStatus();
        expect(status.hungry).toBe(100);
        expect(status.clean).toBe(100);
        expect(status.mood).toBe(100);
    });

    it('should increase hungry status when fed, up to a max of 100', () => {
        const gameLogic = new GameLogic();
        // 内部状態をテストのために変更
        gameLogic['status'].hungry = 80;

        gameLogic.feed();
        expect(gameLogic.getStatus().hungry).toBe(90); // e.g., increases by 10

        // 100を超えないことを確認
        gameLogic['status'].hungry = 95;
        gameLogic.feed();
        expect(gameLogic.getStatus().hungry).toBe(100);
    });

    it('should increase clean status when cleaned, up to a max of 100', () => {
        const gameLogic = new GameLogic();
        gameLogic['status'].clean = 70;
        gameLogic.clean();
        expect(gameLogic.getStatus().clean).toBe(80);

        gameLogic['status'].clean = 95;
        gameLogic.clean();
        expect(gameLogic.getStatus().clean).toBe(100);
    });

    it('should increase mood status when played with, up to a max of 100', () => {
        const gameLogic = new GameLogic();
        gameLogic['status'].mood = 60;
        gameLogic.play();
        expect(gameLogic.getStatus().mood).toBe(70);

        gameLogic['status'].mood = 95;
        gameLogic.play();
        expect(gameLogic.getStatus().mood).toBe(100);
    });
});
