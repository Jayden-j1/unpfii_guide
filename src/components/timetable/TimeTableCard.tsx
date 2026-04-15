import type { TimetableItem } from '../../data/types';

export function TimetableCard({ item }: { item: TimetableItem }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {item.week}
          </p>

          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {item.day}, {item.date}
          </h3>
        </div>

        <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {item.time}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {item.agendaItem}
      </p>

      <h4 className="mt-2 text-base font-semibold text-slate-900">
        {item.title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </article>
  );
}