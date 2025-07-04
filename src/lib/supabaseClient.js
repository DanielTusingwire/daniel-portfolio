
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ekjnfiowxfjbgvkyispt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVram5maW93eGZqYmd2a3lpc3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NDQwOTksImV4cCI6MjA2NzEyMDA5OX0.RBD23qHejhgxi_Jr3yfOjj0n91F7jI431in3bLqUCk8';

export const supabase = createClient(supabaseUrl, supabaseKey);
