import { BackToHomeLink } from '../components/layout/BackToHomeLink';
import { PageShell } from '../components/layout/PageShell';
import { LandIsLifeAgendaCard } from '../components/timetable/LandIsLifeAgendaCard';
import { LAND_IS_LIFE_AGENDA } from '../data/landIsLifeAgenda';

export function LandIsLifeAgendaPage() {
  return (
    <PageShell
      title="Land Is Life Agenda"
      subtitle="Full Land Is Life event agenda for UNPFII 2026, including side events, dialogue sessions, workshops, and related gatherings."
      action={<BackToHomeLink />}
    >
      <div className="mx-auto grid max-w-4xl gap-4">
        {LAND_IS_LIFE_AGENDA.map((item) => (
          <LandIsLifeAgendaCard key={item.id} item={item} />
        ))}
      </div>
    </PageShell>
  );
}