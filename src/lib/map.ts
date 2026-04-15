import type { MapLocation, MapLocationCategory } from '../data/types';

export const MAP_CATEGORY_ORDER: MapLocationCategory[] = [
  'Accommodation',
  'Attraction',
  'Coffee',
  'Laundry',
  'Tour',
  'Park',
  'Other',
];

export function getSortedCategories(
  locations: MapLocation[],
): MapLocationCategory[] {
  const present = new Set(locations.map((location) => location.category));
  return MAP_CATEGORY_ORDER.filter((category) => present.has(category));
}

export function buildCategoryCounts(
  locations: MapLocation[],
): Record<string, number> {
  return locations.reduce<Record<string, number>>((acc, location) => {
    acc[location.category] = (acc[location.category] ?? 0) + 1;
    return acc;
  }, {});
}

export function getAccommodationLocation(
  locations: MapLocation[],
): MapLocation | undefined {
  return locations.find((location) => location.category === 'Accommodation');
}

export function filterLocationsByCategories(
  locations: MapLocation[],
  activeCategories: MapLocationCategory[],
): MapLocation[] {
  if (activeCategories.length === 0) return locations;

  const activeSet = new Set(activeCategories);
  return locations.filter((location) => activeSet.has(location.category));
}