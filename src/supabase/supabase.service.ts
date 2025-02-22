import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    // const url = this.configService.get<string>('SUPABASE_URL');
    const url = 'https://escxhikglngtppzlqwjm.supabase.co';
    // const key = this.configService.get<string>('SUPABASE_KEY');
    const key =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzY3hoaWtnbG5ndHBwemxxd2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxODIzMTgsImV4cCI6MjA1NTc1ODMxOH0.aKuAiPfOlBEmIfhrSf5pyCZrvEyvYawnr6wOsfuuz1Q';
    this.supabase = createClient(url, key);
  }

  async getUsers() {
    let { data: todos, error } = await this.supabase
      .schema('public')
      .from('todos')
      .select('id');
    return todos;
  }
}
