import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { MapPage } from '../pages/MapPage';
import { TimetablePage } from '../pages/TimeTablePage';
import { LocationDescriptionsPage } from '../pages/LocationDescriptionPage';

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/locations" element={<LocationDescriptionsPage />} />
      </Routes>
    </HashRouter>
  );
}