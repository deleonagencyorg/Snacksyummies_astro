import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async ({ request }) => {
  try {
    return new Response(JSON.stringify({
      ip: null,
      country: null,
      defaultLocale: 'es'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error detecting locale:', error);
    return new Response(JSON.stringify({
      error: 'Error detecting locale',
      defaultLocale: 'es'
    }), { status: 500 });
  }
};
