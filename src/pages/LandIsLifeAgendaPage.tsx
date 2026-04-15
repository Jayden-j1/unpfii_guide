import { BackToHomeLink } from '../components/layout/BackToHomeLink';
import { PageShell } from '../components/layout/PageShell';
import { LandIsLifeAgendaCard } from '../components/timetable/LandIsLifeAgendaCard';
import { LAND_IS_LIFE_AGENDA } from '../data/landIsLifeAgenda';
import type { LandIsLifeAgendaItem } from '../data/types';

type AgendaGroup = {
  key: string;
  day: string;
  date: string;
  items: LandIsLifeAgendaItem[];
};

function groupAgendaByDate(items: LandIsLifeAgendaItem[]): AgendaGroup[] {
  const groups = new Map<string, AgendaGroup>();

  for (const item of items) {
    const key = `${item.day}-${item.date}`;

    if (!groups.has(key)) {
      groups.set(key, {
        key,
        day: item.day,
        date: item.date,
        items: [],
      });
    }

    groups.get(key)!.items.push(item);
  }

  return Array.from(groups.values());
}

export function LandIsLifeAgendaPage() {
  const groupedAgenda = groupAgendaByDate(LAND_IS_LIFE_AGENDA);

  return (
    <PageShell
      title="Land Is Life Agenda"
      subtitle="Full Land Is Life event agenda for UNPFII 2026, including side events, dialogue sessions, workshops, and related gatherings."
      action={<BackToHomeLink />}
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {groupedAgenda.map((group) => (
          <section key={group.key} className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {group.day}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">
                {group.date}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {group.items.length} event{group.items.length === 1 ? '' : 's'}
              </p>
            </div>

            <div className="grid gap-4">
              {group.items.map((item) => (
                <LandIsLifeAgendaCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}