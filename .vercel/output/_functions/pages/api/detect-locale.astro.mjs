import geoip from 'geoip-lite';
import '../../chunks/i18n_N2D6iQyo.mjs';
export { renderers } from '../../renderers.mjs';

const ENGLISH_SPEAKING_COUNTRIES = [
  "US",
  "GB",
  "CA",
  "AU",
  "NZ",
  "IE",
  "ZA",
  "JM",
  "BZ",
  "BS",
  "BB",
  "AG",
  "DM",
  "GD",
  "KN",
  "LC",
  "VC",
  "TT",
  "GY"
];
const SPANISH_SPEAKING_COUNTRIES = [
  "HN",
  "ES",
  "MX",
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GT",
  "NI",
  "PA",
  "PY",
  "PE",
  "PR",
  "UY",
  "VE"
];
function detectCountry(ip) {
  try {
    const geo = geoip.lookup(ip);
    return geo?.country || null;
  } catch (error) {
    console.error("Error detecting country:", error);
    return null;
  }
}
function getDefaultLocaleByCountry(countryCode) {
  if (!countryCode) return "es";
  if (ENGLISH_SPEAKING_COUNTRIES.includes(countryCode)) {
    return "en";
  }
  if (SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
    return "es";
  }
  return "es";
}
function detectLocale(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("cf-connecting-ip") || "127.0.0.1";
  const countryCode = detectCountry(ip);
  const locale = getDefaultLocaleByCountry(countryCode);
  return { locale, ip, country: countryCode };
}

const GET = async ({ request }) => {
  try {
    const { locale, ip, country } = detectLocale(request);
    return new Response(JSON.stringify({
      ip,
      country,
      defaultLocale: locale
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error detecting locale:", error);
    return new Response(JSON.stringify({
      error: "Error detecting locale",
      defaultLocale: "es"
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
