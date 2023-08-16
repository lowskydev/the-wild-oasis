import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pbkiwhqyhiubrddezlpq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBia2l3aHF5aGl1YnJkZGV6bHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1MTE5MDksImV4cCI6MjAwNzA4NzkwOX0.mU-HJrANV3jMt69a-EMTF9_yoJy75SJ7t_z6TgZtDtk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
