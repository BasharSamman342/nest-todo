import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class HttpResponseService {
    public respondSuccess(res: Response,data:any,msg?:string){
        return res.status(HttpStatus.OK).send({
            message:msg,
            data,
        });
    }
}
