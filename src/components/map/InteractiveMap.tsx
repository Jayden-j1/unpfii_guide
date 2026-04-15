import { useEffect } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import L, { type LatLngExpression } from 'leaflet';
import type { MapLocation } from '../../data/types';
import { createCategoryMarkerIcon } from './markerIcons';

type InteractiveMapProps = {
  locations: MapLocation[];
  focusLocation?: MapLocation;
};

const DEFAULT_CENTER: LatLngExpression = [40.7527, -73.9772];

function FitBounds({ locations, focusLocation }: InteractiveMapProps) {
  const map = useMap();

  useEffect(() => {
    if (focusLocation) {
      map.setView([focusLocation.latitude, focusLocation.longitude], 15, {
        animate: true,
      });
      return;
    }

    if (locations.length === 0) return;

    if (locations.length === 1) {
      map.setView([locations[0].latitude, locations[0].longitude], 15, {
        animate: true,
      });
      return;
    }

    const bounds = L.latLngBounds(
      locations.map(
        (location): [number, number] => [location.latitude, location.longitude],
      ),
    );

    map.fitBounds(bounds, {
      padding: [40, 40],
      maxZoom: 14,
    });
  }, [locations, focusLocation, map]);

  return null;
}

export function InteractiveMap({
  locations,
  focusLocation,
}: InteractiveMapProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="h-[62vh] min-h-[420px] w-full sm:h-[68vh] lg:h-[72vh]">
        <MapContainer
          center={DEFAULT_CENTER}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBounds locations={locations} focusLocation={focusLocation} />

          {locations.map((location) => {
            const position: [number, number] = [
              location.latitude,
              location.longitude,
            ];

            return (
              <Marker
                key={`${location.name}-${location.latitude}-${location.longitude}`}
                position={position}
                icon={createCategoryMarkerIcon(location.category)}
              >
                <Popup>
                  <div className="max-w-[240px]">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {location.category}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900">
                      {location.name}
                    </h3>

                    {location.address ? (
                      <p className="mt-2 text-xs leading-5 text-slate-700">
                        {location.address}
                      </p>
                    ) : null}

                    {location.notes ? (
                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        Note: {location.notes}
                      </p>
                    ) : null}
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}