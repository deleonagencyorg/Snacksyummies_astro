// Importar automáticamente todos los archivos JSON de ganadores
import supermanSixFlags2024 from './superman-six-flags-2024.json';
import guardianesSaborPuntaCana from './guardianes-sabor-punta-cana.json';

// Exportar todos los ganadores organizados por promoción
export const winners_promotions = {
  'superman-six-flags-mexico': supermanSixFlags2024,
  'guardianes-sabor-punta-cana': guardianesSaborPuntaCana
} as WinnersPromotions;

// Exportar tipos para TypeScript
export interface Winner {
  image: string;
  description: string;
}

export interface WinnersByCountry {
  [country: string]: Winner[];
}

export interface WinnersPromotions {
  [promotionSlug: string]: WinnersByCountry;
}

// Función helper para obtener ganadores de una promoción específica
export function getWinnersByPromotion(promotionSlug: string): WinnersByCountry | null {
  return winners_promotions[promotionSlug] || null;
}

// Función helper para obtener ganadores de un país específico en una promoción
export function getWinnersByCountry(promotionSlug: string, country: string): Winner[] | null {
  const promotion = getWinnersByPromotion(promotionSlug);
  return promotion?.[country] || null;
}

// Función helper para obtener todas las promociones disponibles
export function getAvailablePromotions(): string[] {
  return Object.keys(winners_promotions);
}

// Función helper para obtener todos los países con ganadores en una promoción
export function getCountriesWithWinners(promotionSlug: string): string[] {
  const promotion = getWinnersByPromotion(promotionSlug);
  if (!promotion) return [];
  
  return Object.entries(promotion)
    .filter(([country, winners]) => winners.length > 0)
    .map(([country]) => country);
}

export default winners_promotions;
