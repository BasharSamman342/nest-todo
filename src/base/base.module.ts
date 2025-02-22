import { Module } from '@nestjs/common';
import { HttpResponseModule } from 'src/http-response/http-response.module';

@Module({
    imports:[HttpResponseModule]
})
export class BaseModule {}
