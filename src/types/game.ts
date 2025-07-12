export type PetPhase = 'egg' | 'baby' | 'junior' | 'adult';

export interface PetStatus {
  hungry: number;  // 0-100
  clean:  number;  // 0-100
  mood:   number;  // 0-100
}

export interface SaveData {
  version: 1;
  phase: PetPhase;
  status: PetStatus;
  lastPlayed: number;
}
