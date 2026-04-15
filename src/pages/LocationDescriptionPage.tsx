import { BackToHomeLink } from '../components/layout/BackToHomeLink';
import { PageShell } from '../components/layout/PageShell';
import { LocationCard } from '../components/locations/LocationCard';
import { LOCATION_DESCRIPTIONS } from '../data/locationDescription';

export function LocationDescriptionsPage() {
  return (
    <PageShell
      title="Location Descriptions"
      subtitle="Key places for the trip, including what they are, where they are, and why they matter."
      action={<BackToHomeLink />}
    >
      <div className="mx-auto grid max-w-4xl gap-4">
        {LOCATION_DESCRIPTIONS.map((item) => (
          <LocationCard key={item.id} item={item} />
        ))}
      </div>
    </PageShell>
  );
}