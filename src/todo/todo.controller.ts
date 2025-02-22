import { Controller, Get, Res } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';

@Controller('todo')
export class TodoController extends BaseController {
    @Get()
    async index(@Res() response:Response) {
        return this.success([],"success response",response);
    }
}
