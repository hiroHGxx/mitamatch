import { Scene } from 'phaser';

export class UIController {
    private scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
    }

    public createUI() {
        // メインコンテナをゲームコンテナに追加
        const uiContainer = document.createElement('div');
        uiContainer.id = 'ui-container';
        uiContainer.className = 'absolute top-0 left-0 w-full h-full pointer-events-none z-10';
        document.getElementById('game-container')?.appendChild(uiContainer);

        // ヘッダー
        const header = document.createElement('header');
        header.className = 'absolute top-0 left-0 w-full p-4 flex justify-between items-center';
        header.innerHTML = `
            <h1 class="text-2xl font-bold text-white">ミタマっち</h1>
            <div class="text-xl text-white">Soul: 0</div>
        `;
        uiContainer.appendChild(header);

        // メーター
        const meters = document.createElement('div');
        meters.id = 'meters-container';
        meters.className = 'absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4';
        meters.innerHTML = `
            <div class="text-white">Hungry: 100</div>
            <div class="text-white">Clean: 100</div>
            <div class="text-white">Mood: 100</div>
        `;
        uiContainer.appendChild(meters);

        // フッター（操作ボタン）
        const footer = document.createElement('footer');
        footer.className = 'absolute bottom-0 left-0 w-full p-4 flex justify-around pointer-events-auto';
        footer.innerHTML = `
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ごはん</button>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">そうじ</button>
            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">あそぶ</button>
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">シェア</button>
        `;
        uiContainer.appendChild(footer);
    }
}
