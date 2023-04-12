// src/models/Film.ts

export interface Film {
    id: number;
    titel: string;
    beskrivning: string;
    regissör: string;
    skådespelare: Array<string>;
    år: number;
    genre: Array<string>;
    betyg: number;
}
