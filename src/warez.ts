import { Router, Request, Response, NextFunction } from 'express';
import useragent from 'express-useragent';
import fs from 'fs-extra';
import Path from 'path';
import pug from 'pug';

const router = Router();
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

function render(req: Request) {
	return pug.renderFile(path('views', `${req.useragent?.isIE ? 'out' : 'up'}dated.pug`), { images });
}

router.use(useragent.express(), (req: Request, res: Response, next: NextFunction) => req.useragent?.isIE ? res.type('html').send(render(req)) : next());

export default router;

//console.log(`Is user IE? ${req.useragent?.isIE ? 'Yes' : 'No'} (${req.useragent?.browser} ${req.useragent?.version})`);
