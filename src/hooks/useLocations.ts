import { useEffect, useState } from 'react';
import type { MapLocation } from '../data/types';
import { fetchLocationsFromCsv } from '../lib/csv';

type UseLocationsResult = {
  locations: MapLocation[];
  loading: boolean;
  error: string | null;
};

export function useLocations(): UseLocationsResult {
  const [locations, setLocations] = useState<MapLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const data = await fetchLocationsFromCsv();
        if (!active) return;
        setLocations(data);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : 'Failed to load locations.');
      } finally {
        if (active) setLoading(false);
      }
    }

    void load();

    return () => {
      active = false;
    };
  }, []);

  return { locations, loading, error };
}