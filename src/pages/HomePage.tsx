import { PageShell } from '../components/layout/PageShell';
import { HOME_NAV_ITEMS } from '../lib/constants';
import { HomeNavCard } from '../components/home/HomeNavCard';

export function HomePage() {
  return (
    <PageShell
      title="Home"
      subtitle="A simple, mobile-friendly guide for accommodation, timetable, locations, and the interactive Manhattan map."
    >
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="grid w-full max-w-md gap-5">
          {HOME_NAV_ITEMS.map((item) => (
            <HomeNavCard key={item.to} item={item} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}