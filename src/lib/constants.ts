import type { NavItem } from '../data/types';

export const APP_TITLE = 'NY Manhattan Quick Reference';

export const HOME_NAV_ITEMS: NavItem[] = [
  {
    title: 'Timetable',
    description: 'View the day-by-day schedule and event details.',
    to: '/timetable',
  },
  {
    title: 'Map',
    description: 'Open the interactive Manhattan map with key locations.',
    to: '/map',
  },
  {
    title: 'Location Descriptions',
    description: 'Read short descriptions and fun facts for key places.',
    to: '/locations',
  },
];