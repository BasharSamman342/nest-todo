import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  public supabase: SupabaseClient;
  constructor() {
    const config = new ConfigService()
    const url = config.get<string>('SUPABASE_URL');
    const key = config.get<string>('SUPABASE_KEY');
    this.supabase = createClient(url, key);
  }

}
