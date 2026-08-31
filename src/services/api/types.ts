// src/services/api/types.ts
export interface RecipeBrandRelation {
  id: string;
  name: string;
  slug: string;
}

export interface RecipeProductRelation {
  id: string;
  name: string;
  slug: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  image: string;
  preparation_time: number;
  people?: string | number;
  difficulty?: string;
  ingredients: string[];
  instructions: string[];
  category?: string;
  description?: string;
  gallery?: string[];
  brands?: RecipeBrandRelation[];
  products?: RecipeProductRelation[];
  brandSlugs: string[];
  brand?: string | string[];
  tags?: string[];
  video?: string;
  date?: string;
  // seo
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSRecipeRaw {
  id: string;
  slug?: string;
  title: string;
  image?: string | { url: string };
  preparationTime?: number;
  preparation_time?: number;
  category?: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
  people?: string | number;
  difficulty?: string;
  gallery?: string[];
  brands?: RecipeBrandRelation[];
  products?: RecipeProductRelation[];
  tags?: string[];
  video?: string;
  date?: string;
  // seo
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSRecipesResponse {
  data: CMSRecipeRaw[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
  };
}

export interface Product {
  id: string;
  slug?: string;
  name: string;
  title?: string;
  category?: string;
  image: string;
  imageMobile?: string;
  description?: string;
  backgroundColor?: string;
  headerTextColor?: string;
  textColor?: string;
  colorButton?: string;
  weight?: string[];
  sizes?: Array<{ value: string; image?: string }>;
  nutrition?: {
    title?: string;
    serving?: string;
    rows?: { label: string; value: string }[];
    disclaimer?: string;
  };
  brandId?: string;
  brandSlug?: string;
  brandName?: string;
  isNew?: boolean;

  // para seo desde CMS
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSProductRaw {
  id: string;
  slug?: string;
  name: string;
  category?: string;
  image?: string | { url: string };
  imageMobile?: string;
  description?: string;
  backgroundColor?: string;
  background_color?: string;
  headerTextColor?: string;
  header_color?: string;
  textColor?: string;
  text_color?: string;
  colorButton?: string;
  color_button?: string;
  weight?: string[];
  sizes?: Array<{ value: string; image?: string }>;
  nutrition?: {
    title?: string;
    serving?: string;
    rows?: { label: string; value: string }[];
    disclaimer?: string;
  };
  brandId?: string;
  isNew?: boolean;
  // seo
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSProductsResponse {
  data: CMSProductRaw[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
  };
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { url: string } | string | null;
  canonical?: string;
}

export interface CMSPageRaw {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  featuredImage?: { url: string };
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { url: string } | null;
  seo?: SEO;
}

export interface TopMessage {
  id: string;
  text: string;
  link?: string;
  order?: number;
  isActive: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export interface CMSTopMessageRaw {
  id: string;
  title?: string;
  text?: string;
  link?: string;
  order?: number;
  languageCode?: string;
  brandId?: string;
  is_active?: boolean;
  background_color?: string;
  text_color?: string;
}

export interface CMSTopMessagesResponse {
  data: CMSTopMessageRaw[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
  };
}