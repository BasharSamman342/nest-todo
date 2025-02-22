import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

@Controller('demo')
export class SuparbaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  async getAllUsers() {
    return await this.supabaseService.getUsers();
  }
}
