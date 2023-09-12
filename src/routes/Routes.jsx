import { CardList } from "./cards-list/CardList";
import { Collection } from "./collection/Collection";
import { Routes, Route, Outlet } from "react-router-dom";

export function AppRoutes() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="cardlist" element={<CardList />} />
            <Route path="collection" element={<Collection />} />
          </Route>
        </Routes>
      }
    </>
  );
}
