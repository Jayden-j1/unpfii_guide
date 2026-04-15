import Papa from 'papaparse';
import type {
  LocationCsvRow,
  MapLocation,
  MapLocationCategory,
} from '../data/types';

function toNumber(value: string | undefined): number | null {
  if (!value) return null;

  const parsed = Number(value.trim());
  return Number.isNaN(parsed) ? null : parsed;
}

function normaliseCategory(value: string | undefined): MapLocationCategory {
  const cleaned = value?.trim();

  switch (cleaned) {
    case 'Accommodation':
    case 'Attraction':
    case 'Coffee':
    case 'Laundry':
    case 'Tour':
    case 'Park':
      return cleaned;
    default:
      return 'Other';
  }
}

function normaliseLocation(row: LocationCsvRow): MapLocation | null {
  const latitude = toNumber(row.latitude);
  const longitude = toNumber(row.longitude);
  const labelPriority = toNumber(row.label_priority) ?? 0;

  if (latitude === null || longitude === null) {
    return null;
  }

  return {
    name: row.name?.trim() ?? '',
    category: normaliseCategory(row.category),
    address: row.address?.trim() ?? '',
    latitude,
    longitude,
    labelPriority,
    notes: row.notes?.trim() || undefined,
  };
}

export async function fetchLocationsFromCsv(): Promise<MapLocation[]> {
  const csvUrl =
    'https://Jayden-j1.github.io/unpfii_guide/locations.csv';

  const response = await fetch(csvUrl, {
    headers: {
      Accept: 'text/csv,text/plain,*/*',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to load locations CSV file. HTTP ${response.status}`);
  }

  const csvText = await response.text();
  const trimmed = csvText.trim().toLowerCase();

  if (trimmed.startsWith('<!doctype html') || trimmed.startsWith('<html')) {
    throw new Error(`CSV path is wrong. HTML was returned instead of CSV from ${csvUrl}`);
  }

  const parsed = Papa.parse<LocationCsvRow>(csvText, {
    header: true,
    skipEmptyLines: true,
    delimiter: ',',
  });

  if (parsed.errors.length > 0) {
    throw new Error(`CSV parse error: ${parsed.errors[0].message}`);
  }

  return parsed.data
    .map((row: LocationCsvRow) => normaliseLocation(row))
    .filter((location): location is MapLocation => location !== null);
}








// import Papa from 'papaparse';
// import type {
//   LocationCsvRow,
//   MapLocation,
//   MapLocationCategory,
// } from '../data/types';

// function toNumber(value: string | undefined): number | null {
//   if (!value) return null;

//   const parsed = Number(value.trim());
//   return Number.isNaN(parsed) ? null : parsed;
// }

// function normaliseCategory(value: string | undefined): MapLocationCategory {
//   const cleaned = value?.trim();

//   switch (cleaned) {
//     case 'Accommodation':
//     case 'Attraction':
//     case 'Coffee':
//     case 'Laundry':
//     case 'Tour':
//     case 'Park':
//       return cleaned;
//     default:
//       return 'Other';
//   }
// }

// function normaliseLocation(row: LocationCsvRow): MapLocation | null {
//   const latitude = toNumber(row.latitude);
//   const longitude = toNumber(row.longitude);
//   const labelPriority = toNumber(row.label_priority) ?? 0;

//   if (latitude === null || longitude === null) {
//     return null;
//   }

//   return {
//     name: row.name?.trim() ?? '',
//     category: normaliseCategory(row.category),
//     address: row.address?.trim() ?? '',
//     latitude,
//     longitude,
//     labelPriority,
//     notes: row.notes?.trim() || undefined,
//   };
// }

// export async function fetchLocationsFromCsv(): Promise<MapLocation[]> {
//   const csvUrl = `${import.meta.env.BASE_URL}locations.csv`;

//   const response = await fetch(csvUrl, {
//     headers: {
//       Accept: 'text/csv,text/plain,*/*',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to load locations CSV file. HTTP ${response.status}`);
//   }

//   const csvText = await response.text();
//   const trimmed = csvText.trim().toLowerCase();

//   if (trimmed.startsWith('<!doctype html') || trimmed.startsWith('<html')) {
//     throw new Error(`CSV path is wrong. HTML was returned instead of CSV from ${csvUrl}`);
//   }

//   const parsed = Papa.parse<LocationCsvRow>(csvText, {
//     header: true,
//     skipEmptyLines: true,
//     delimiter: ',',
//   });

//   if (parsed.errors.length > 0) {
//     throw new Error(`CSV parse error: ${parsed.errors[0].message}`);
//   }

//   return parsed.data
//     .map((row: LocationCsvRow) => normaliseLocation(row))
//     .filter((location): location is MapLocation => location !== null);
// }








// // import Papa from 'papaparse';
// // import type {
// //   LocationCsvRow,
// //   MapLocation,
// //   MapLocationCategory,
// // } from '../data/types';

// // function toNumber(value: string | undefined): number | null {
// //   if (!value) return null;

// //   const parsed = Number(value.trim());
// //   return Number.isNaN(parsed) ? null : parsed;
// // }

// // function normaliseCategory(value: string | undefined): MapLocationCategory {
// //   const cleaned = value?.trim();

// //   switch (cleaned) {
// //     case 'Accommodation':
// //     case 'Attraction':
// //     case 'Coffee':
// //     case 'Laundry':
// //     case 'Tour':
// //     case 'Park':
// //       return cleaned;
// //     default:
// //       return 'Other';
// //   }
// // }

// // function normaliseLocation(row: LocationCsvRow): MapLocation | null {
// //   const latitude = toNumber(row.latitude);
// //   const longitude = toNumber(row.longitude);
// //   const labelPriority = toNumber(row.label_priority) ?? 0;

// //   if (latitude === null || longitude === null) {
// //     return null;
// //   }

// //   return {
// //     name: row.name?.trim() ?? '',
// //     category: normaliseCategory(row.category),
// //     address: row.address?.trim() ?? '',
// //     latitude,
// //     longitude,
// //     labelPriority,
// //     notes: row.notes?.trim() || undefined,
// //   };
// // }

// // export async function fetchLocationsFromCsv(): Promise<MapLocation[]> {
// //   const csvUrl = `${import.meta.env.BASE_URL}locations.csv`;

// //   const response = await fetch(csvUrl, {
// //     headers: {
// //       Accept: 'text/csv,text/plain,*/*',
// //     },
// //   });

// //   if (!response.ok) {
// //     throw new Error(`Failed to load locations CSV file. HTTP ${response.status}`);
// //   }

// //   const csvText = await response.text();
// //   const trimmed = csvText.trim().toLowerCase();

// //   if (trimmed.startsWith('<!doctype html') || trimmed.startsWith('<html')) {
// //     throw new Error(`CSV path is wrong. HTML was returned instead of CSV from ${csvUrl}`);
// //   }

// //   const parsed = Papa.parse<LocationCsvRow>(csvText, {
// //     header: true,
// //     skipEmptyLines: true,
// //     delimiter: ',',
// //   });

// //   if (parsed.errors.length > 0) {
// //     throw new Error(`CSV parse error: ${parsed.errors[0].message}`);
// //   }

// //   return parsed.data
// //     .map((row: LocationCsvRow) => normaliseLocation(row))
// //     .filter((location): location is MapLocation => location !== null);
// // }








// // // import Papa from 'papaparse';
// // // import type {
// // //   LocationCsvRow,
// // //   MapLocation,
// // //   MapLocationCategory,
// // // } from '../data/types';

// // // function toNumber(value: string | undefined): number | null {
// // //   if (!value) return null;

// // //   const parsed = Number(value.trim());
// // //   return Number.isNaN(parsed) ? null : parsed;
// // // }

// // // function normaliseCategory(value: string | undefined): MapLocationCategory {
// // //   const cleaned = value?.trim();

// // //   switch (cleaned) {
// // //     case 'Accommodation':
// // //     case 'Attraction':
// // //     case 'Coffee':
// // //     case 'Laundry':
// // //     case 'Tour':
// // //     case 'Park':
// // //       return cleaned;
// // //     default:
// // //       return 'Other';
// // //   }
// // // }

// // // function normaliseLocation(row: LocationCsvRow): MapLocation | null {
// // //   const latitude = toNumber(row.latitude);
// // //   const longitude = toNumber(row.longitude);
// // //   const labelPriority = toNumber(row.label_priority) ?? 0;

// // //   if (latitude === null || longitude === null) {
// // //     return null;
// // //   }

// // //   return {
// // //     name: row.name?.trim() ?? '',
// // //     category: normaliseCategory(row.category),
// // //     address: row.address?.trim() ?? '',
// // //     latitude,
// // //     longitude,
// // //     labelPriority,
// // //     notes: row.notes?.trim() || undefined,
// // //   };
// // // }

// // // export async function fetchLocationsFromCsv(): Promise<MapLocation[]> {
// // //   const response = await fetch('../../public/locations.csv');

// // //   if (!response.ok) {
// // //     throw new Error('Failed to load locations CSV file.');
// // //   }

// // //   const csvText = await response.text();

// // //   const parsed = Papa.parse<LocationCsvRow>(csvText, {
// // //     header: true,
// // //     skipEmptyLines: true,
// // //     delimiter: ',',
// // //   });

// // //   if (parsed.errors.length > 0) {
// // //     throw new Error(`CSV parse error: ${parsed.errors[0].message}`);
// // //   }

// // //   return parsed.data
// // //     .map((row: LocationCsvRow) => normaliseLocation(row))
// // //     .filter((location): location is MapLocation => location !== null);
// // // }