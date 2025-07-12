import { PetStatus } from '../types/game.d';

export class GameLogic {
    private status: PetStatus;

    constructor() {
        this.status = {
            hungry: 100,
            clean: 100,
            mood: 100,
        };
    }

    public getStatus(): PetStatus {
        return this.status;
    }

    public feed(): void {
        this.status.hungry = Math.min(100, this.status.hungry + 10);
    }

    public clean(): void {
        this.status.clean = Math.min(100, this.status.clean + 10);
    }

    public play(): void {
        this.status.mood = Math.min(100, this.status.mood + 10);
    }
}
