import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { HttpResponseModule } from './http-response/http-response.module';
import { BaseModule } from './base/base.module';
import { BaseController } from './base/base.controller';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    SupabaseModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigService available throughout the app
    }),
    HttpResponseModule,
    BaseModule,
    TodoModule,
  ],
  controllers: [AppController, BaseController],
  providers: [AppService],
})
export class AppModule {}
