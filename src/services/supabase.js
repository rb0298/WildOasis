import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fvmsbxxpsqvtsbdzeuyi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bXNieHhwc3F2dHNiZHpldXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MjYwNjYsImV4cCI6MjAzMjIwMjA2Nn0.e5Xzhhn541ZL_U3EdsBdyT0UIMfXmHrPF3e7PU45fOg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
