import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xzujpakutawgxmezhtgf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dWpwYWt1dGF3Z3htZXpodGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMTU5MTIsImV4cCI6MjAyNDY5MTkxMn0.OcUGlqVSNzbVi18sgGlf-MmFiaFz9yZKHDIdCTjn-2c"
);
