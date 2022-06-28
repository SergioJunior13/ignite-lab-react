import { Navigate, Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/event" element={<Navigate to="/event/lesson/aula-01" />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/" element={<Subscribe />} />
    </Routes>
  );
}
