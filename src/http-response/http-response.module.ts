import { Module } from '@nestjs/common';
import { HttpResponseService } from './http-response.service';

@Module({
  imports: [],
  providers: [HttpResponseService],
  exports: [HttpResponseService]
})
export class HttpResponseModule {}
