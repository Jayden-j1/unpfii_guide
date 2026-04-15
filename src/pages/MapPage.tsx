import { useMemo, useState } from 'react';
import { BackToHomeLink } from '../components/layout/BackToHomeLink';
import { PageShell } from '../components/layout/PageShell';
import { InteractiveMap } from '../components/map/InteractiveMap';
import { MapLegend } from '../components/map/MapLegend';
import { useLocations } from '../hooks/useLocations';
import type { MapLocationCategory } from '../data/types';
import {
  filterLocationsByCategories,
  getAccommodationLocation,
} from '../lib/map';

export function MapPage() {
  const { locations, loading, error } = useLocations();
  const [activeCategories, setActiveCategories] = useState<
    MapLocationCategory[]
  >([]);
  const [focusAccommodation, setFocusAccommodation] = useState(false);

  const filteredLocations = useMemo(
    () => filterLocationsByCategories(locations, activeCategories),
    [locations, activeCategories],
  );

  const accommodationLocation = useMemo(
    () => getAccommodationLocation(locations),
    [locations],
  );

  function handleToggleCategory(category: MapLocationCategory) {
    setFocusAccommodation(false);

    setActiveCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  function handleShowAll() {
    setActiveCategories([]);
    setFocusAccommodation(false);
  }

  function handleShowAccommodationOnly() {
    setActiveCategories(['Accommodation']);
    setFocusAccommodation(true);
  }

  const mapLocationsToRender = filteredLocations;

  return (
    <PageShell
      title="Map"
      subtitle="Interactive Manhattan map with accommodation, attractions, coffee, laundry, and other key locations. Designed to stay readable on mobile."
      action={<BackToHomeLink />}
    >
      <div className="grid gap-4">
        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-600">Loading map locations…</p>
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-5 shadow-sm">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        ) : (
          <>
            <MapLegend
              locations={locations}
              activeCategories={activeCategories}
              onToggleCategory={handleToggleCategory}
              onShowAll={handleShowAll}
              onShowAccommodationOnly={handleShowAccommodationOnly}
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Visible locations
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Showing {mapLocationsToRender.length} of {locations.length}{' '}
                    locations.
                  </p>
                </div>

                {activeCategories.length > 0 ? (
                  <button
                    type="button"
                    onClick={handleShowAll}
                    className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Clear filters
                  </button>
                ) : null}
              </div>
            </div>

            <InteractiveMap
              locations={mapLocationsToRender}
              focusLocation={
                focusAccommodation ? accommodationLocation : undefined
              }
            />
          </>
        )}
      </div>
    </PageShell>
  );
}