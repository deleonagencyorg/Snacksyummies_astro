import type { APIRoute } from 'astro';
import geoip from 'geoip-lite';

// Asegurar que este endpoint se renderice en el servidor
export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  try {
    // Verificar si hay un parámetro para forzar un país (para testing)
    const forceCountry = url.searchParams.get('force');
    if (forceCountry) {
      console.log('Forzando país:', forceCountry);
      const countryNames: { [key: string]: string } = {
        'HN': 'Honduras',
        'GT': 'Guatemala', 
        'SV': 'El Salvador',
        'NI': 'Nicaragua',
        'CR': 'Costa Rica',
        'DO': 'Dominican Republic',
        'PA': 'Panama',
        'BZ': 'Belize'
      };
      
      const countryName = countryNames[forceCountry.toUpperCase()] || forceCountry;
      
      return new Response(JSON.stringify({
        country: countryName,
        countryCode: forceCountry.toUpperCase(),
        city: 'Test City',
        region: 'Test Region',
        timezone: 'America/Guatemala',
        ip: 'forced',
        forced: true
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache' // No cache para testing
        }
      });
    }

    // Obtener la IP del usuario
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfConnectingIp = request.headers.get('cf-connecting-ip');
    
    // Priorizar diferentes headers de IP
    let clientIp = forwarded?.split(',')[0] || realIp || cfConnectingIp;
    
    // Si no hay IP en headers, intentar obtener la IP real
    if (!clientIp) {
      // En desarrollo local, intentar usar APIs externas para obtener la IP real
      if (process.env.NODE_ENV === 'development') {
        try {
          // Intentar obtener la IP real del usuario
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipResponse.json();
          clientIp = ipData.ip;
        } catch (error) {
        }
      } else {
        return new Response(JSON.stringify({ 
          error: 'No se pudo obtener la IP del cliente',
          country: null,
          countryCode: null 
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // Limpiar la IP (remover ::ffff: prefix si existe)
    clientIp = clientIp.replace(/^::ffff:/, '');
    
    console.log('Detectando país para IP:', clientIp);

    // Usar geoip-lite para obtener información de geolocalización
    const geo = geoip.lookup(clientIp);
    
    if (geo) {
      // Mapear códigos de país a nombres completos
      const countryNames: { [key: string]: string } = {
        'HN': 'Honduras',
        'GT': 'Guatemala', 
        'SV': 'El Salvador',
        'NI': 'Nicaragua',
        'CR': 'Costa Rica',
        'DO': 'Dominican Republic',
        'PA': 'Panama',
        'BZ': 'Belize'
      };

      const countryName = countryNames[geo.country] || geo.country;
      
      console.log('País detectado:', countryName, '(', geo.country, ')');

      return new Response(JSON.stringify({
        country: countryName,
        countryCode: geo.country,
        city: geo.city,
        region: geo.region,
        timezone: geo.timezone,
        ip: clientIp
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=3600' // Cache por 1 hora
        }
      });
    } else {
      console.log('No se pudo determinar el país para la IP:', clientIp);
      
      return new Response(JSON.stringify({
        error: 'No se pudo determinar el país',
        country: null,
        countryCode: null,
        ip: clientIp
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

  } catch (error) {
    console.error('Error en detección de país:', error);
    
    return new Response(JSON.stringify({
      error: 'Error interno del servidor',
      country: null,
      countryCode: null
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

// Permitir CORS para requests OPTIONS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
