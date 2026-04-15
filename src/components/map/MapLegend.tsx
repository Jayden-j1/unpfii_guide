import type { MapLocation, MapLocationCategory } from '../../data/types';
import { buildCategoryCounts, getSortedCategories } from '../../lib/map';

type MapLegendProps = {
  locations: MapLocation[];
  activeCategories: MapLocationCategory[];
  onToggleCategory: (category: MapLocationCategory) => void;
  onShowAll: () => void;
  onShowAccommodationOnly: () => void;
};

function getMarkerToneClass(category: MapLocationCategory): string {
  switch (category) {
    case 'Accommodation':
      return 'bg-slate-900 text-white';
    case 'Attraction':
      return 'bg-slate-700 text-white';
    case 'Coffee':
      return 'bg-amber-100 text-amber-900';
    case 'Laundry':
      return 'bg-emerald-100 text-emerald-900';
    case 'Tour':
      return 'bg-violet-100 text-violet-900';
    case 'Park':
      return 'bg-green-100 text-green-900';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

export function MapLegend({
  locations,
  activeCategories,
  onToggleCategory,
  onShowAll,
  onShowAccommodationOnly,
}: MapLegendProps) {
  const counts = buildCategoryCounts(locations);
  const categories = getSortedCategories(locations);
  const hasActiveFilter = activeCategories.length > 0;

  return (
    <section className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Map Filters
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Tap a category to show or hide it. This keeps the map easier to
              read on smaller screens.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onShowAll}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Show all
            </button>
            <button
              type="button"
              onClick={onShowAccommodationOnly}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Accommodation only
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategories.includes(category);

            return (
              <button
                key={category}
                type="button"
                onClick={() => onToggleCategory(category)}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition ${
                  isActive || !hasActiveFilter
                    ? 'border-slate-800 bg-slate-900 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${getMarkerToneClass(
                    category,
                  )}`}
                >
                  {category.charAt(0)}
                </span>
                <span>
                  {category} ({counts[category] ?? 0})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Map Notes</h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
          <li>
            Accommodation is the quickest anchor point for getting oriented.
          </li>
          <li>
            Statue of Liberty sits away from Midtown, so including it widens the
            overall map view.
          </li>
          <li>
            Use the filters when you want to focus on walking-distance spots like
            coffee or nearby attractions.
          </li>
        </ul>
      </div>
    </section>
  );
}