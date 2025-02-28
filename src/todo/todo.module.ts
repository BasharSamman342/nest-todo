import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { BaseModule } from 'src/base/base.module';
import { HttpResponseModule } from 'src/http-response/http-response.module';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports:[BaseModule,HttpResponseModule,SupabaseModule]
})
export class TodoModule {}
