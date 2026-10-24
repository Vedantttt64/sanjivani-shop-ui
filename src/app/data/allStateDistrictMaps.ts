import districtMapsJson from './allStateDistrictMaps.json';
import { maharashtraMapPaths, DistrictPath } from './maharashtraMapData';
import { StateSpecialtyItem } from './allStatesSpecialties';

export interface StateDistrictMapConfig {
  viewBox: string;
  districts: DistrictPath[];
}

export type { DistrictPath };

const districtMapsData = districtMapsJson as Record<string, { viewBox: string; districts: DistrictPath[] }>;

// Specific aliases for common district name variations
const DISTRICT_ALIASES: Record<string, string[]> = {
  'gir': ['junagadh', 'amreli'],
  'kutch': ['kachchh'],
  'bhal': ['bhavnagar', 'ahmadabad', 'anand'],
  'mehsana': ['mahesana'],
  'fazilka': ['firozpur', 'muktsar', 'bathinda'],
  'mysuru': ['mysore'],
  'mysuru-betel': ['mysore'],
  'uttara-kannada': ['uttarkannand', 'uttarkannada'],
  'prayagraj': ['allahabad'],
  'gurdaspur': ['gurdaspur'],
  'amritsar': ['amritsar'],
  'bathinda': ['bathinda'],
  'kodagu': ['kodagu'],
  'haveri': ['haveri'],
  'dharwad': ['dharwad'],
  'idukki': ['idukki'],
  'wayanad': ['wayanad'],
  'palakkad': ['palakkad'],
  'kinnaur': ['kinnaur'],
  'kangra': ['kangra'],
  'nagaur': ['nagaur'],
  'jodhpur': ['jodhpur'],
  'lucknow': ['lucknow']
};

export function getStateDistrictMap(stateName: string): StateDistrictMapConfig {
  const norm = (stateName || '').trim().toLowerCase();

  // Maharashtra has custom detailed map paths
  if (norm === 'maharashtra') {
    return {
      viewBox: '0 0 800 650',
      districts: maharashtraMapPaths
    };
  }

  // Look up in allStateDistrictMaps
  const matchedKey = Object.keys(districtMapsData).find(
    (k) => k.toLowerCase() === norm
  );

  if (matchedKey && districtMapsData[matchedKey]) {
    return districtMapsData[matchedKey];
  }

  return {
    viewBox: '0 0 750 600',
    districts: []
  };
}

export function isDistrictMatch(district: DistrictPath, specialty: StateSpecialtyItem): boolean {
  if (!district || !specialty) return false;

  const dId = district.id.toLowerCase();
  const dName = district.name.toLowerCase();
  const sId = (specialty.districtId || '').toLowerCase();
  const sLoc = (specialty.location || '').toLowerCase();
  const sProd = (specialty.produceName || '').toLowerCase();

  // Direct ID or name match
  if (dId === sId) return true;
  if (sId && (sId.includes(dId) || dId.includes(sId))) return true;
  if (sLoc.includes(dName) || dName.includes(sLoc.split(' ')[0])) return true;
  if (sProd.includes(dName)) return true;

  // Alias dictionary match
  const aliases = DISTRICT_ALIASES[sId];
  if (aliases && aliases.some(a => dId.includes(a) || a.includes(dId))) {
    return true;
  }

  return false;
}
