export type AppRoute = '/' | '/map' | '/timetable' | '/locations';

export type NavItem = {
  title: string;
  description: string;
  to: AppRoute;
};

export type TimetableItem = {
  id: string;
  week: 'First week' | 'Second week';
  day: string;
  date: string;
  time: string;
  agendaItem: string;
  title: string;
  description: string;
};

export type LandIsLifeAgendaItem = {
  id: string;
  day: string;
  date: string;
  time: string;
  eventType: string;
  title: string;
  location: string;
  interpretation?: string;
  organisersLabel?: string;
  organisers?: string;
  notes?: string;
};

export type LocationInfo = {
  id: string;
  name: string;
  category:
    | 'Accommodation'
    | 'Attraction'
    | 'Coffee'
    | 'Laundry'
    | 'Tour'
    | 'Park';
  address: string;
  shortDescription: string;
  funFact?: string;
};

export type LocationCsvRow = {
  name: string;
  category: string;
  address: string;
  latitude: string;
  longitude: string;
  label_priority: string;
  notes?: string;
};

export type MapLocationCategory =
  | 'Accommodation'
  | 'Attraction'
  | 'Coffee'
  | 'Laundry'
  | 'Tour'
  | 'Park'
  | 'Other';

export type MapLocation = {
  name: string;
  category: MapLocationCategory;
  address: string;
  latitude: number;
  longitude: number;
  labelPriority: number;
  notes?: string;
};