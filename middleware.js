// Vercel Edge Middleware
// ── PASTE YOUR SUPABASE CREDENTIALS HERE ──────────────────────────────────
const SUPABASE_URL = 'https://fodfiogubheodnejkzod.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvZGZpb2d1Ymhlb2RuZWprem9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTM0ODIsImV4cCI6MjA4OTQ4OTQ4Mn0.0b8knQDQxSvHvmlVveFcRZKVVkM46HP8cThqmzfqDqU';
// ─────────────────────────────────────────────────────────────────────────

export const config = {
  // Run on every route except the login page and static assets
  matcher: ['/((?!login|_next/static|_next/image|favicon.ico).*)'],
};

export default async function middleware(request) {
  const url = new URL(request.url);

  // Allow login page through
  if (url.pathname === '/login.html') {
    return new Response(null, { status: 200 });
  }

  // Get the Supabase session cookie
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );

  // Supabase stores the session in a cookie named sb-<project-ref>-auth-token
  // We check for its presence and validate it
  const projectRef = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
  const sessionCookie = cookies[`sb-${projectRef}-auth-token`];

  if (!sessionCookie) {
    // No session — redirect to login
    return Response.redirect(new URL('/login.html', request.url), 302);
  }

  let session;
  try {
    session = JSON.parse(decodeURIComponent(sessionCookie));
  } catch {
    return Response.redirect(new URL('/login.html', request.url), 302);
  }

  // Check token expiry (exp is in seconds)
  const now = Math.floor(Date.now() / 1000);
  if (!session?.expires_at || session.expires_at < now) {
    return Response.redirect(new URL('/login.html', request.url), 302);
  }

  // Session is valid — let the request through
  return new Response(null, { status: 200 });
}