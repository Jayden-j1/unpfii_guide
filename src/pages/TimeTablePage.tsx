import { BackToHomeLink } from '../components/layout/BackToHomeLink';
import { PageShell } from '../components/layout/PageShell';
import { TimetableCard } from '../components/timetable/TimeTableCard';
import { TIMETABLE } from '../data/timetable';

export function TimetablePage() {
  return (
    <PageShell
      title="Timetable"
      subtitle="Full UNPFII 2026 programme of work in a clearer mobile-friendly format."
      action={<BackToHomeLink />}
    >
      <div className="mx-auto grid max-w-4xl gap-4">
        {TIMETABLE.map((item) => (
          <TimetableCard key={item.id} item={item} />
        ))}
      </div>
    </PageShell>
  );
}