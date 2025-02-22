import { Controller, Res } from '@nestjs/common';
import { Response } from 'express';
import { HttpResponseService } from 'src/http-response/http-response.service';

@Controller()
export class BaseController {
    protected httpResponse:HttpResponseService;
    constructor(httpResponseService: HttpResponseService) {
        this.httpResponse = httpResponseService;
    }

    success(data:any,msg:string,response:any){
        return this.httpResponse.respondSuccess(response,data, msg);
    }
}
