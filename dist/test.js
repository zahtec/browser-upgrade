"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const warez_1 = __importDefault(require("./warez"));
// set up express app
const app = (0, express_1.default)();
// add middleware for warez.ts
app.use(warez_1.default);
app.all('*', (_req, res) => res.sendStatus(200));
app.listen(3000, () => console.log('Listening on port 3000 (click http://127.0.0.1:3000)'));
