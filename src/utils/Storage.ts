import type { SaveData } from '../types/game';

const SAVE_KEY = 'mitamatch-save-data';

export class Storage {
    public static save(data: SaveData): void {
        try {
            const json = JSON.stringify(data);
            localStorage.setItem(SAVE_KEY, json);
        } catch (e) {
            console.error('Failed to save game data', e);
        }
    }

    public static load(): SaveData | null {
        try {
            const json = localStorage.getItem(SAVE_KEY);
            if (json) {
                const data = JSON.parse(json) as SaveData;
                // ここでデータ構造のバージョンチェックなどを行う（将来）
                return data;
            }
        } catch (e) {
            console.error('Failed to load game data', e);
        }
        return null;
    }
}
