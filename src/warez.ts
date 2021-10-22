import { Request, Response, NextFunction } from 'express';
import useragent from 'express-useragent';
import fs from 'fs-extra';
import Path from 'path';
import pug from 'pug';

const images = {
	chrome: base64_encode(path('img', 'chrome.png')),
	firefox: base64_encode(path('img', 'firefox.png')),
	edge: base64_encode(path('img', 'edge.png')),
};

function path(...args: string[]) {
	return Path.join(process.cwd(), ...args);
}

function base64_encode(file: string) {
	return Buffer.from(fs.readFileSync(file)).toString('base64');
}

function render(isIE: boolean) {
	return pug.renderFile(path('views', `${isIE ? 'out' : 'up'}dated.pug`), { images });
}

function _main(req: Request, res: Response, next: NextFunction) {
	const { isIE } = useragent.parse(req.headers['user-agent'] || '');
	isIE ? res.type('html').send(render(isIE)) : next();
}

export default _main;
