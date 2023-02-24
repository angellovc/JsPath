import * as express from 'express';
import {Request, Response} from 'express';
import state from './state';
import * as cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/v1', (request:Request, response:Response) => {
    response.json(state);
});


app.listen(PORT, () => {
    console.log(`<h1>Server running at http://localhost:${PORT}</h1>`);
    console.log(`<h1>Server running at http://localhost:${PORT}</h1>`);
});
