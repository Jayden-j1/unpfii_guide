import type { LocationInfo } from '../../data/types';

export function LocationCard({ item }: { item: LocationInfo }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>

          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {item.category}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Address
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-700">{item.address}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Description
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          {item.shortDescription}
        </p>
      </div>

      {item.funFact ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Fun fact
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {item.funFact}
          </p>
        </div>
      ) : null}
    </article>
  );
}