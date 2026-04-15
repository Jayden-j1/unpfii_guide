import type { LandIsLifeAgendaItem } from '../../data/types';

export function LandIsLifeAgendaCard({
  item,
}: {
  item: LandIsLifeAgendaItem;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {item.day}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {item.date}
          </h3>
        </div>

        <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {item.time}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {item.eventType}
      </p>

      <h4 className="mt-2 text-base font-semibold text-slate-900">
        {item.title}
      </h4>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Location
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-700">{item.location}</p>
      </div>

      {item.interpretation ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Interpretation
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {item.interpretation}
          </p>
        </div>
      ) : null}

      {item.organisers ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {item.organisersLabel ?? 'Organisers'}
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {item.organisers}
          </p>
        </div>
      ) : null}

      {item.notes ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Notes
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">{item.notes}</p>
        </div>
      ) : null}
    </article>
  );
}