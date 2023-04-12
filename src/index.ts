// src/index.ts

import express from 'express';
import path from 'path';
import handlebars from 'handlebars';
import { ExpressHandlebars } from 'express-handlebars';
import bodyParser from 'body-parser';
import { filmRouter } from './routes/filmRouter';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

const app = express();

const exphbsInstance = new ExpressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    handlebars: allowInsecurePrototypeAccess(handlebars),
});

app.engine('.hbs', exphbsInstance.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/filmer', filmRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Servern lyssnar på port ${port}`);
});
