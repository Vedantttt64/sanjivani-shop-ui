import { CATEGORY_BANNERS, CategoryBanner } from './categoryBanners';

export interface BannerLookupResult {
  banner: CategoryBanner | null;
  isFallback: boolean;
}

/**
 * Returns the appropriate banner for a category and optional subcategory.
 * 
 * Strict fallback order:
 * 1. Exact subcategory banner (`${categoryKey}-${subKey}`)
 * 2. Category default ("all") banner (`categoryKey`)
 * 3. Never return a different category's banner. Return null if none exists.
 * 
 * A dev-only console warning is logged when a category lacks a banner.
 */
export function getBannerFor(categoryKey: string, subKey?: string): BannerLookupResult {
  if (!categoryKey) {
    return { banner: null, isFallback: true };
  }

  // 1. Try exact subcategory banner if specified and not 'all'
  if (subKey && subKey !== 'all') {
    const subSpecificKey = `${categoryKey}-${subKey}`;
    if (CATEGORY_BANNERS[subSpecificKey]) {
      return { banner: CATEGORY_BANNERS[subSpecificKey], isFallback: false };
    }
  }

  // 2. Try category-level default banner
  if (CATEGORY_BANNERS[categoryKey]) {
    return { banner: CATEGORY_BANNERS[categoryKey], isFallback: false };
  }

  // 3. Strict category isolation: Never substitute with another category's banner
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      `[CategoryBanner] Missing banner configuration for category: "${categoryKey}" (subKey: "${subKey || 'all'}"). Rendering code-generated gradient fallback.`
    );
  }

  return { banner: null, isFallback: true };
}
