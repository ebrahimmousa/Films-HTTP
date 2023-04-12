"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const express_handlebars_1 = require("express-handlebars");
const body_parser_1 = __importDefault(require("body-parser"));
const filmRouter_1 = require("./routes/filmRouter");
const allow_prototype_access_1 = __importDefault(require("@handlebars/allow-prototype-access"));
const app = (0, express_1.default)();
const exphbsInstance = new express_handlebars_1.ExpressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path_1.default.join(__dirname, 'views/layouts'),
    partialsDir: path_1.default.join(__dirname, 'views/partials'),
    handlebars: (0, allow_prototype_access_1.default)(handlebars_1.default),
});
app.engine('.hbs', exphbsInstance.engine);
app.set('view engine', '.hbs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/filmer', filmRouter_1.filmRouter);
const port = 3000;
app.listen(port, () => {
    console.log(`Servern lyssnar på port ${port}`);
});
