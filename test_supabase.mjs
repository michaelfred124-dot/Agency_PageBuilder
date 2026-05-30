console.log("Script started");

console.log("Loading dotenv dynamically...");
const dotenv = await import('dotenv');
console.log("Loaded dotenv. Configuring...");
dotenv.config({ path: '.env.local' });
console.log("Configured dotenv.");

console.log("Loading @supabase/supabase-js dynamically...");
const { createClient } = await import('@supabase/supabase-js');
console.log("Loaded @supabase/supabase-js.");

console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

console.log("Calling supabase.auth.getUser()...");
try {
  const start = Date.now();
  const res = await Promise.race([
    supabase.auth.getUser(),
    new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout after 5s")), 5000))
  ]);
  console.log("Success! Time taken:", Date.now() - start, "ms");
  console.log("User data:", JSON.stringify(res));
  process.exit(0);
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
}
