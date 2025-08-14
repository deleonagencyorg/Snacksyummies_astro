import geoip from 'geoip-lite';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request, url }) => {
  try {
    const forceCountry = url.searchParams.get("force");
    if (forceCountry) {
      console.log("Forzando país:", forceCountry);
      const countryNames = {
        "HN": "Honduras",
        "GT": "Guatemala",
        "SV": "El Salvador",
        "NI": "Nicaragua",
        "CR": "Costa Rica",
        "DO": "Dominican Republic",
        "PA": "Panama",
        "BZ": "Belize"
      };
      const countryName = countryNames[forceCountry.toUpperCase()] || forceCountry;
      return new Response(JSON.stringify({
        country: countryName,
        countryCode: forceCountry.toUpperCase(),
        city: "Test City",
        region: "Test Region",
        timezone: "America/Guatemala",
        ip: "forced",
        forced: true
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-cache"
          // No cache para testing
        }
      });
    }
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const cfConnectingIp = request.headers.get("cf-connecting-ip");
    let clientIp = forwarded?.split(",")[0] || realIp || cfConnectingIp;
    if (!clientIp) {
      if (process.env.NODE_ENV === "development") {
        try {
          const ipResponse = await fetch("https://api.ipify.org?format=json");
          const ipData = await ipResponse.json();
          clientIp = ipData.ip;
        } catch (error) {
        }
      } else {
        return new Response(JSON.stringify({
          error: "No se pudo obtener la IP del cliente",
          country: null,
          countryCode: null
        }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
      }
    }
    clientIp = clientIp.replace(/^::ffff:/, "");
    console.log("Detectando país para IP:", clientIp);
    const geo = geoip.lookup(clientIp);
    if (geo) {
      const countryNames = {
        "HN": "Honduras",
        "GT": "Guatemala",
        "SV": "El Salvador",
        "NI": "Nicaragua",
        "CR": "Costa Rica",
        "DO": "Dominican Republic",
        "PA": "Panama",
        "BZ": "Belize"
      };
      const countryName = countryNames[geo.country] || geo.country;
      console.log("País detectado:", countryName, "(", geo.country, ")");
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
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600"
          // Cache por 1 hora
        }
      });
    } else {
      console.log("No se pudo determinar el país para la IP:", clientIp);
      return new Response(JSON.stringify({
        error: "No se pudo determinar el país",
        country: null,
        countryCode: null,
        ip: clientIp
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  } catch (error) {
    console.error("Error en detección de país:", error);
    return new Response(JSON.stringify({
      error: "Error interno del servidor",
      country: null,
      countryCode: null
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
const OPTIONS = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  OPTIONS,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
