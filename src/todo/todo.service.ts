import { Injectable } from '@nestjs/common';
import { Todo } from 'src/models/Todo';
import { SupabaseService } from 'src/supabase/supabase.service';
import { AddTodoDto } from './dtos/add-todo-dto';
import { UpdateTodoDto } from './dtos/update-todo-dto';

@Injectable()
export class TodoService {
    private supabaseSer:SupabaseService
    constructor() {
        this.supabaseSer = new SupabaseService();
    }

    async getTodos(){
        let { data: todos, error } = await this.supabaseSer.supabase
        .schema('public')
        .from('todos')
        .select('*');
        if (error) throw new Error(error.message);
        return todos;
    }

    async getTodoDetails(id: number): Promise<Todo>{
        let { data: todos, error } = await this.supabaseSer.supabase
        .schema('public')
        .from('todos') 
        .select('*').eq("id",id);
        if (error) throw new Error(error.message);
        return 
    }

    async addTodo(data:AddTodoDto): Promise<Todo>{
        let { data:todo, error } = await this.supabaseSer.supabase
            .schema('public')
            .from('todos') 
            .insert(data);
        if (error) throw new Error(error.message);
        return todo 
    }

    async updateTodo(data:UpdateTodoDto,id:number): Promise<Todo>{
        console.log("data",data);
        
        let { data:todo, error } = await this.supabaseSer.supabase
            .schema('public')
            .from('todos') 
            .update(data)
            .match({id});
        if (error) throw new Error(error.message);
        return todo 
    }
    async deleteTodo(id:number): Promise<Todo>{
        
        const { data,error } = await this.supabaseSer.supabase
            .from('todos')
            .delete()
            .eq('id', id);
        if (error) throw new Error(error.message);
        return data
    }
}
