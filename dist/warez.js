"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_useragent_1 = __importDefault(require("express-useragent"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const pug_1 = __importDefault(require("pug"));
const router = (0, express_1.Router)();
const images = {
    chrome: base64_encode(path('img', 'chrome.png')),
    firefox: base64_encode(path('img', 'firefox.png')),
    edge: base64_encode(path('img', 'edge.png')),
};
function path(...args) {
    return path_1.default.join(process.cwd(), ...args);
}
function base64_encode(file) {
    return Buffer.from(fs_extra_1.default.readFileSync(file)).toString('base64');
}
function render(req) {
    return pug_1.default.renderFile(path('views', `${req.useragent?.isIE ? 'out' : 'up'}dated.pug`), { images });
}
router.use(express_useragent_1.default.express(), (req, res, next) => req.useragent?.isIE ? res.type('html').send(render(req)) : next());
exports.default = router;
//console.log(`Is user IE? ${req.useragent?.isIE ? 'Yes' : 'No'} (${req.useragent?.browser} ${req.useragent?.version})`);
