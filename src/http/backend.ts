import {Request, Response} from 'express';

class DurkaBackend {
    async handShake(req : Request, res : Response) {
        res.send("8c766e25");
    }
}

export default new DurkaBackend();
