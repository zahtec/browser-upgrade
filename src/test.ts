import express, { Request, Response } from 'express';
import warez from './warez';

// set up express app
const app = express();

// add middleware for warez.ts
app.use(warez);
app.all('*', (_req: Request, res: Response) => res.sendStatus(200));

app.listen(3000, () => console.log('Listening on port 3000 (click http://127.0.0.1:3000)'));
