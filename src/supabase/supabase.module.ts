import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SuparbaseController } from './supabase.controller';

@Module({
  controllers: [SuparbaseController],
  providers: [SupabaseService],
  exports: [SupabaseService]
})
export class SupabaseModule {}
