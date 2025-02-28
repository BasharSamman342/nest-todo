import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseController } from 'src/base/base.controller';
import { HttpResponseService } from 'src/http-response/http-response.service';
import { SupabaseService } from 'src/supabase/supabase.service';
import { TodoService } from './todo.service';
import { AddTodoDto } from './dtos/add-todo-dto';
import { UpdateTodoDto } from './dtos/update-todo-dto';

@Controller('todo')
export class TodoController extends BaseController {
    private todoService:TodoService
    constructor( todoService: TodoService) {
        super(new HttpResponseService());
        this.todoService = todoService;
    }
    @Get()
    async index(@Res() response:Response) {
        const res = await this.todoService.getTodos();
        return this.success({
            res
        },"success response",response)
    }

    @Post()
    async store(@Body() body:AddTodoDto,@Res() response:Response){
        const res = await this.todoService.addTodo(body);
        return this.success({
            res
        },"success response",response)
    }

    @Put("/:id")
    async update(@Body() body:UpdateTodoDto,@Param("id") id:number,@Res() response:Response){
        const res = await this.todoService.updateTodo(body,id);
        return this.success({
            res
        },"success response",response)
    }

    @Delete("/:id")
    async delete(@Param("id") id:number,@Res() response:Response){
        const res = await this.todoService.deleteTodo(id);
        return this.success({
            res
        },"success response",response)
    }
}
