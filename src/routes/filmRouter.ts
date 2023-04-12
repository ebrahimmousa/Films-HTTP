// src/routes/filmRouter.ts

import express from 'express';
import { Film } from '../models/Film';

const filmRouter = express.Router();

let filmer: Array<Film> = [
    {
        id: 1,
        titel: 'Fight Club',
        beskrivning: 'En kontorsarbetare leds på sitt trista liv och startar en underjordisk fight club tillsammans med en tvivelaktig vän.',
        regissör: 'David Fincher',
        skådespelare: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
        år: 1999,
        genre: ['Drama', 'Thriller'],
        betyg: 8.8,
    },
    {
        id: 2,
        titel: 'Inception',
        beskrivning: 'En professionell tjuv som stjäl information genom att infiltrera det undermedvetna tar sig an sitt livs svåraste uppdrag.',
        regissör: 'Christopher Nolan',
        skådespelare: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        år: 2010,
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        betyg: 8.8,
    },
    {
        id: 3,
        titel: 'Pulp Fiction',
        beskrivning: 'Livet för två mobbtorpeder, en boxare, en gangsterfru och ett par rånare vävs samman i fyra berättelser om våld och försoning.',
        regissör: 'Quentin Tarantino',
        skådespelare: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
        år: 1994,
        genre: ['Crime', 'Drama'],
        betyg: 8.9,
    },
    {
        id: 4,
        titel: 'The Shawshank Redemption',
        beskrivning: 'Två livstidsfångar skapar vänskap under åren i fängelse. Tillsammans hittar de tröst och ett sätt att överleva.',
        regissör: 'Frank Darabont',
        skådespelare: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        år: 1994,
        genre: ['Drama'],
        betyg: 9.3,
    },
    {
        id: 5,
        titel: 'The Godfather',
        beskrivning: 'En åldrande patriark för en organiserad brottsfamilj överför kontrollen över sitt imperium till sin motvillige son.',
        regissör: 'Francis Ford Coppola',
        skådespelare: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        år: 1972,
        genre: ['Crime', 'Drama'],
        betyg: 9.2,
    },
];


filmRouter.get('/', (req, res) => {
    res.render('filmlista', { filmer });
});

filmRouter.get('/:id', (req, res) => {
    const film = filmer.find(film => film.id === parseInt(req.params.id, 10));
    if (film) {
        res.render('filmdetaljer', { film });
    } else {
        res.status(404).send('Film hittades inte');
    }
});

export { filmRouter };
