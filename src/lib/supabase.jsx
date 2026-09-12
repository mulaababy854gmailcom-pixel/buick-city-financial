import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ifflitqjidtjzxdpdvex.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZmxpdHFqaWR0anp4ZHBkdmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMjIyMDYsImV4cCI6MjEwNDc5ODIwNn0.LaZxaq0iONJph3bwKfSL5p7-oOvYJ2B7l1lVQcI_Bj8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);