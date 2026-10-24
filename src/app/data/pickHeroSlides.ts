import { Festival, FESTIVALS_DATA } from './festivals';
import { ALL_STATES_SPECIALTIES } from './allStatesSpecialties';

export type HeroKind = 'festival' | 'state' | 'seasonal' | 'trust';

export interface HeroSlide {
  id: string;
  kind: HeroKind;
  eyebrow: string;
  title: string;
  subtitle: string;
  greetingLocal?: Record<string, string>;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
  photoCredit?: string;
  offerLine?: string;
  promoCode?: string;
  stateKey?: string;
  festivalId?: string;
  giNumber?: string;
  mascotPose?: 'wave' | 'point' | 'cheer';
  mascotLine?: string;
  collectionKey?: string;
  countdownDays?: number; // Days until festival if pre-festival phase
  festivalPhase?: 'pre' | 'day-of' | 'post';
}

export interface PickHeroSlidesOptions {
  todayIst?: string; // Format 'YYYY-MM-DD' in Indian Standard Time (IST)
  selectedState?: string | null;
  activePromoCode?: string; // Optional coupon code e.g. 'HARVEST25'
  activeOfferLine?: string; // Optional promo line
}

/**
 * Helper to compute current date formatted as 'YYYY-MM-DD' in Asia/Kolkata (IST).
 */
export function getCurrentIstDate(): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date()); // Returns 'YYYY-MM-DD'
}

/**
 * Computes difference in calendar days (targetDate - baseDate)
 */
function diffDays(baseDateStr: string, targetDateStr: string): number {
  const [by, bm, bd] = baseDateStr.split('-').map(Number);
  const [ty, tm, td] = targetDateStr.split('-').map(Number);
  const baseUtc = Date.UTC(by, bm - 1, bd);
  const targetUtc = Date.UTC(ty, tm - 1, td);
  return Math.round((targetUtc - baseUtc) / (1000 * 60 * 60 * 24));
}

/**
 * Formats a YYYY-MM-DD date into friendly weekday and date: e.g. "Tuesday, 20 October"
 */
function formatFestivalDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dateObj = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  return dateObj.toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

/**
 * Seasonal slides calendar based on month (1-12)
 */
function getSeasonalSlide(month: number, offerLine?: string, promoCode?: string): HeroSlide {
  // Summer (Mar - Jun): Mangoes & cooling squash
  if (month >= 3 && month <= 6) {
    return {
      id: 'seasonal-summer-mangoes',
      kind: 'seasonal',
      eyebrow: 'SUMMER HARVEST · ORCHARD DIRECT',
      title: 'Devgad Alphonso Mangoes, Tree-Ripened Under the Coastal Sun',
      subtitle: 'Plucked at peak sweetness with zero artificial carbide. Packed farm-side in Ratnagiri.',
      ctaLabel: 'Shop Summer Harvest',
      ctaHref: '/?category=fresh-fruits',
      secondaryLabel: 'Meet the Orchards',
      secondaryHref: '#community-section',
      imageDesktop: '/images/specialties/devgad_alphonso.jpg',
      imageMobile: '/images/specialties/devgad_alphonso.jpg',
      imageAlt: 'Golden Devgad Alphonso mangoes basking in warm coastal orchard light',
      photoCredit: 'Devgad Farmer Collective',
      mascotPose: 'point',
      mascotLine: 'Tree-ripened Alphonso!',
      offerLine,
      promoCode,
      collectionKey: 'fresh-fruits',
    };
  }

  // Monsoon (Jul - Sep): Crisp greens & native roots
  if (month >= 7 && month <= 9) {
    return {
      id: 'seasonal-monsoon-greens',
      kind: 'seasonal',
      eyebrow: 'MONSOON BOUNTY · 218 RESIDUE TESTED',
      title: 'Crisp Rain-Fed Leafy Greens & Organic Roots',
      subtitle: 'Freshly harvested spinach, methi, and native turmeric washed in clean rainwater.',
      ctaLabel: 'Shop Fresh Greens',
      ctaHref: '/?category=fresh-vegetables',
      secondaryLabel: 'Check Lab Test Reports',
      secondaryHref: '#faq-section',
      imageDesktop: '/images/food.JPG',
      imageMobile: '/images/food.JPG',
      imageAlt: 'Fresh organic leafy greens and vegetables harvested after morning showers',
      photoCredit: 'Pune Organic Cluster',
      mascotPose: 'wave',
      mascotLine: 'Fresh morning harvest!',
      offerLine,
      promoCode,
      collectionKey: 'fresh-vegetables',
    };
  }

  // Autumn / Festive Pre-winter (Oct - Nov): Cold pressed oils & festive flours
  if (month >= 10 && month <= 11) {
    return {
      id: 'seasonal-autumn-oils',
      kind: 'seasonal',
      eyebrow: 'COLD PRESSED KACHI GHANI · A2 BILONA GHEE',
      title: 'Ancient Stone-Milled Flours & Single-Origin Pressed Oils',
      subtitle: 'Slow wood-churned desi cow ghee and mustard oil cold-pressed below 42°C for festive cooking.',
      ctaLabel: 'Shop Pure Oils & Ghee',
      ctaHref: '/?category=oil-ghee',
      secondaryLabel: 'Know the Process',
      secondaryHref: '#faq-section',
      imageDesktop: '/images/products/a2-ghee.jpg',
      imageMobile: '/images/products/a2-ghee.jpg',
      imageAlt: 'Authentic stone churned A2 Gir cow bilona ghee and pure wooden kachi ghani oils',
      photoCredit: 'Saurashtra Gaushala',
      mascotPose: 'point',
      mascotLine: 'Pure bilona ghee!',
      offerLine,
      promoCode,
      collectionKey: 'oil-ghee',
    };
  }

  // Winter (Dec - Feb): Citrus, jaggery & makki atta
  return {
    id: 'seasonal-winter-citrus',
    kind: 'seasonal',
    eyebrow: 'WINTER HARVEST · HIGH NATURAL BRIX',
    title: 'Nagpur Sweet Mandarin Oranges & Organic Sugarcane Jaggery',
    subtitle: 'Sun-kissed citrus from Katol orchards and unrefined mineral-rich jaggery from Kolhapur.',
    ctaLabel: 'Explore Winter Harvest',
    ctaHref: '/?category=fresh-fruits',
    secondaryLabel: 'Meet the Citrus Growers',
    secondaryHref: '#community-section',
    imageDesktop: '/images/specialties/nagpur_orange.jpg',
    imageMobile: '/images/specialties/nagpur_orange.jpg',
    imageAlt: 'Fresh Nagpur mandarin oranges in orchard crates with bright winter sunshine',
    photoCredit: 'Katol Citrus Collective',
    mascotPose: 'wave',
    mascotLine: 'Juicy winter oranges!',
    offerLine,
    promoCode,
    collectionKey: 'fresh-fruits',
  };
}

/**
 * Trust slide (Slot 4 or Slot 3 fallback)
 */
function getTrustSlide(): HeroSlide {
  return {
    id: 'hero-trust-farmers',
    kind: 'trust',
    eyebrow: 'DIRECT FROM 500+ VERIFIED SMALLHOLDERS',
    title: 'Farmers Keep More. You Pay Less.',
    subtitle: 'By removing multi-tier mandi middlemen, 100% of fair-trade margins reach family farmers while you enjoy purity verified by 218 lab tests.',
    ctaLabel: 'Meet Our Farmers',
    ctaHref: '#community-section',
    secondaryLabel: 'Our Quality Standards',
    secondaryHref: '#faq-section',
    imageDesktop: '/images/food.JPG',
    imageMobile: '/images/food.JPG',
    imageAlt: 'Partner farmers proudly inspecting chemical-free crops at dawn in rural Maharashtra',
    photoCredit: 'Sanjivani Farmer Cooperative',
    mascotPose: 'wave',
    mascotLine: 'Direct from family farms!',
  };
}

/**
 * State speciality slide generator
 */
function getStateSpecialitySlide(stateName: string, offerLine?: string, promoCode?: string): HeroSlide | null {
  const stateConfig = ALL_STATES_SPECIALTIES[stateName];
  if (!stateConfig || !stateConfig.specialties || stateConfig.specialties.length === 0) {
    return null;
  }

  const featured = stateConfig.specialties[0];
  const giNum = featured.giTagNumber ? featured.giTagNumber.replace('#', '') : undefined;
  const eyebrow = giNum
    ? `GI CERTIFIED #${giNum} · ${featured.location}, ${stateConfig.stateName}`
    : `GI-TAGGED · ${featured.location}, ${stateConfig.stateName}`;

  return {
    id: `state-speciality-${featured.id}`,
    kind: 'state',
    eyebrow,
    title: `${featured.produceName}, Straight from the Grove`,
    subtitle: featured.description,
    ctaLabel: `Shop ${featured.produceName}`,
    ctaHref: `/?state=${encodeURIComponent(stateConfig.stateName)}&category=fresh-fruits`,
    secondaryLabel: 'See the District Map',
    secondaryHref: `/?state=${encodeURIComponent(stateConfig.stateName)}#state-specials-section`,
    imageDesktop: featured.image,
    imageMobile: featured.image,
    imageAlt: `${featured.produceName} harvest direct from ${featured.location}`,
    photoCredit: `${featured.location} Growers`,
    stateKey: stateConfig.stateName,
    giNumber: giNum,
    mascotPose: 'point',
    mascotLine: `Taste ${stateConfig.stateName}'s finest!`,
    offerLine,
    promoCode,
  };
}

/**
 * Main slide selection logic.
 * Produces up to 4 deterministic slides based on:
 * 1. Active festival (nearest in-window national or state-matched)
 * 2. State speciality of selectedState
 * 3. Seasonal slide of current month
 * 4. Trust slide
 */
export function pickHeroSlides(options: PickHeroSlidesOptions = {}): HeroSlide[] {
  const todayIst = options.todayIst || getCurrentIstDate();
  const selectedState = options.selectedState || null;
  const offerLine = options.activeOfferLine;
  const promoCode = options.activePromoCode;

  const slides: HeroSlide[] = [];

  // ── 1. ACTIVE FESTIVAL DISCOVERY ──
  // Scan festivals that are:
  // - verified (in prod, only verified true; dev may warn)
  // - active on todayIst within [showFromDaysBefore, showUntilDaysAfter]
  // - either national (no stateKeys) or matching selectedState
  interface FestivalCandidate {
    festival: Festival;
    daysUntil: number; // diff from today to start date
    phase: 'pre' | 'day-of' | 'post';
    priorityScore: number;
  }

  const candidates: FestivalCandidate[] = [];

  for (const fest of FESTIVALS_DATA) {
    // Check verification flag
    if (!fest.verified) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[HeroFestival] Skipping unverified festival "${fest.name}" (${fest.date}).`);
      }
      continue;
    }

    // Check regional state eligibility
    if (fest.stateKeys && fest.stateKeys.length > 0) {
      if (!selectedState || !fest.stateKeys.includes(selectedState)) {
        continue;
      }
    }

    // Calculate window relative to start date
    const dStart = diffDays(todayIst, fest.date);
    const dEnd = fest.endDate ? diffDays(todayIst, fest.endDate) : dStart;

    // Check if within display window
    // dStart <= fest.showFromDaysBefore means today is on/after (date - showFromDaysBefore)
    // dEnd >= -fest.showUntilDaysAfter means today is on/before (endDate + showUntilDaysAfter)
    const isWithinWindow = dStart <= fest.showFromDaysBefore && dEnd >= -fest.showUntilDaysAfter;

    if (isWithinWindow) {
      let phase: 'pre' | 'day-of' | 'post' = 'pre';
      if (dStart > 0) {
        phase = 'pre';
      } else if (dStart <= 0 && dEnd >= 0) {
        phase = 'day-of';
      } else {
        phase = 'post';
      }

      // Priority score: day-of gets top priority, then nearest date
      const priorityScore = phase === 'day-of' ? -100 : Math.abs(dStart);
      candidates.push({ festival: fest, daysUntil: dStart, phase, priorityScore });
    }
  }

  // Sort candidates by priority score (nearest/active wins)
  candidates.sort((a, b) => a.priorityScore - b.priorityScore);

  let activeFestivalSlide: HeroSlide | null = null;
  if (candidates.length > 0) {
    const { festival, daysUntil, phase } = candidates[0];

    // Local greeting lookup
    let localGreetingText: string | undefined = undefined;
    if (festival.localGreetings) {
      if (selectedState && festival.localGreetings[selectedState]) {
        localGreetingText = festival.localGreetings[selectedState];
      } else if (festival.localGreetings['hi']) {
        localGreetingText = festival.localGreetings['hi'];
      }
    }

    // Headline & subtext templating per phase
    const eyebrow = `${festival.name} · ${formatFestivalDate(festival.date)}`;
    let title = `Happy ${festival.name} from Sanjivani Farms`;
    let subtitle = festival.sub;
    let mascotPose: 'wave' | 'point' | 'cheer' = 'point';
    let mascotLine = festival.mascotLine;

    if (phase === 'pre') {
      if (festival.orderByDate) {
        subtitle = `${festival.sub} Order by ${festival.orderByDate} for guaranteed pre-${festival.name} farm delivery.`;
      }
      mascotPose = 'point';
    } else if (phase === 'day-of') {
      title = localGreetingText ? `${festival.greeting} · ${localGreetingText}` : festival.greeting;
      mascotPose = 'cheer';
      mascotLine = `Happy ${festival.name}! Wishing joy and pure health`;
    } else if (phase === 'post') {
      title = `Thank You for Celebrating ${festival.name} with Us`;
      subtitle = 'Wishing you and your family pure health, abundance, and organic happiness.';
      mascotPose = 'wave';
    }

    activeFestivalSlide = {
      id: `festival-${festival.id}`,
      kind: 'festival',
      eyebrow,
      title,
      subtitle,
      greetingLocal: festival.localGreetings,
      ctaLabel: 'Shop Festive Essentials',
      ctaHref: `/?collection=${festival.collectionKey}`,
      secondaryLabel: 'Meet Our Farmers',
      secondaryHref: '#community-section',
      imageDesktop: festival.imageDesktop,
      imageMobile: festival.imageMobile,
      imageAlt: festival.imageAlt,
      photoCredit: 'Sanjivani Festive Harvest',
      festivalId: festival.id,
      mascotPose,
      mascotLine,
      collectionKey: festival.collectionKey,
      countdownDays: phase === 'pre' ? daysUntil : 0,
      festivalPhase: phase,
      offerLine,
      promoCode,
    };
  }

  // ── 2. STATE SPECIALITY SLIDE ──
  let stateSpecialitySlide: HeroSlide | null = null;
  if (selectedState) {
    stateSpecialitySlide = getStateSpecialitySlide(selectedState, offerLine, promoCode);
  }

  // ── 3. SEASONAL SLIDE ──
  const [, monthStr] = todayIst.split('-');
  const currentMonth = Number(monthStr) || 10;
  const seasonalSlide = getSeasonalSlide(currentMonth, offerLine, promoCode);

  // ── 4. TRUST SLIDE ──
  const trustSlide = getTrustSlide();

  // ── COMPOSING ORDERED SLIDES (MAX 4) ──
  // Rule:
  // Slot 1: active festival (if present) OR seasonal
  // Slot 2: state speciality (if present) OR seasonal
  // Slot 3: seasonal (if not yet added) OR trust
  // Slot 4: trust
  if (activeFestivalSlide) {
    slides.push(activeFestivalSlide);
  }

  if (stateSpecialitySlide) {
    slides.push(stateSpecialitySlide);
  }

  if (!slides.some((s) => s.id === seasonalSlide.id)) {
    slides.push(seasonalSlide);
  }

  if (!slides.some((s) => s.id === trustSlide.id)) {
    slides.push(trustSlide);
  }

  // Ensure maximum 4 slides
  return slides.slice(0, 4);
}
