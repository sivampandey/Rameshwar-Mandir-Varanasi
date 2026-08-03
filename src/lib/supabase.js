import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rwjqlghhjsrxgsrlsrmh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable__t3fkAgl_QFBQexvvQIDBQ_H__rO8be';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
