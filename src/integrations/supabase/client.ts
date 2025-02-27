
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uzpqgtydnanphqzdtdvr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6cHFndHlkbmFucGhxemR0ZHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzIwMzIsImV4cCI6MjA1NjE0ODAzMn0.CCQqDlia8AXfTKPdkXOGLv-6OXjNHI0NZ4JylTLjp5g";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
