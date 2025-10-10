import type { APIRoute } from 'astro';
export const prerender = true;

export const GET: APIRoute = async () => {
  // Static placeholder: no headers available during prerender/static build.
  // The client geo service should use this only as a non-blocking hint and
  // then fall back to client-side detection (ipapi, country.is, etc.).
  return new Response(JSON.stringify({
    country: null,
    locale: 'es',
    ip: null,
    source: 'static-prerender',
    success: false
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
};
