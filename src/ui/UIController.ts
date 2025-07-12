import { Scene } from 'phaser';

export class UIController {
    private scene: Scene;
    private metersContainer?: HTMLDivElement;

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
        this.metersContainer = document.createElement('div');
        this.metersContainer.id = 'meters-container';
        this.metersContainer.className = 'absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4';
        uiContainer.appendChild(this.metersContainer);
        this.updateMeters({ hungry: 100, clean: 100, mood: 100 }); // 初期表示

        // フッター（操作ボタン）
        const footer = document.createElement('footer');
        footer.className = 'absolute bottom-0 left-0 w-full p-4 flex justify-around pointer-events-auto';
        uiContainer.appendChild(footer);

        // ボタンの生成とイベントリスナーの設定
        this.createButton(footer, 'ごはん', 'feed', 'bg-blue-500 hover:bg-blue-700');
        this.createButton(footer, 'そうじ', 'clean', 'bg-green-500 hover:bg-green-700');
        this.createButton(footer, 'あそぶ', 'play', 'bg-yellow-500 hover:bg-yellow-700');
        this.createButton(footer, 'シェア', 'share', 'bg-gray-500 hover:bg-gray-700');
    }

    private createButton(parent: HTMLElement, text: string, eventName: string, className: string) {
        const button = document.createElement('button');
        button.innerText = text;
        button.className = `${className} text-white font-bold py-2 px-4 rounded`;
        button.addEventListener('click', () => {
            this.scene.events.emit(eventName);
        });
        parent.appendChild(button);
    }

    public updateMeters(status: { hungry: number, clean: number, mood: number }) {
        if (this.metersContainer) {
            this.metersContainer.innerHTML = `
                <div class="text-white">Hungry: ${status.hungry}</div>
                <div class="text-white">Clean: ${status.clean}</div>
                <div class="text-white">Mood: ${status.mood}</div>
            `;
        }
    }

    public showFunFact(fact: string) {
        alert(fact);
    }
}
