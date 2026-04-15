import L from 'leaflet';
import type { DivIcon } from 'leaflet';
import type { MapLocationCategory } from '../../data/types';

export function createCategoryMarkerIcon(
  category: MapLocationCategory,
): DivIcon {
  const label = getCategoryLabel(category);
  const className = getCategoryClassName(category);

  return L.divIcon({
    className: 'custom-map-marker-wrapper',
    html: `
      <div class="custom-map-marker ${className}">
        <span>${label}</span>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30],
  });
}

function getCategoryLabel(category: MapLocationCategory): string {
  switch (category) {
    case 'Accommodation':
      return 'H';
    case 'Attraction':
      return 'A';
    case 'Coffee':
      return 'C';
    case 'Laundry':
      return 'L';
    case 'Tour':
      return 'T';
    case 'Park':
      return 'P';
    default:
      return '•';
  }
}

function getCategoryClassName(category: MapLocationCategory): string {
  switch (category) {
    case 'Accommodation':
      return 'marker-accommodation';
    case 'Attraction':
      return 'marker-attraction';
    case 'Coffee':
      return 'marker-coffee';
    case 'Laundry':
      return 'marker-laundry';
    case 'Tour':
      return 'marker-tour';
    case 'Park':
      return 'marker-park';
    default:
      return 'marker-other';
  }
}