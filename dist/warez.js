"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_useragent_1 = __importDefault(require("express-useragent"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const pug_1 = __importDefault(require("pug"));
const images = {
    chrome: base64_encode(path('img', 'chrome.png')),
    firefox: base64_encode(path('img', 'firefox.png')),
    edge: base64_encode(path('img', 'edge.png')),
};
function path(...args) {
    return path_1.default.join(__dirname, '..', ...args);
}
function base64_encode(file) {
    return Buffer.from(fs_extra_1.default.readFileSync(file)).toString('base64');
}
function render(isIE) {
    return pug_1.default.renderFile(path('views', `${isIE ? 'out' : 'up'}dated.pug`), { images });
}
function _main(req, res, next) {
    const { isIE } = express_useragent_1.default.parse(req.headers['user-agent'] || '');
    isIE ? res.type('html').send(render(isIE)) : next();
}
exports.default = _main;
