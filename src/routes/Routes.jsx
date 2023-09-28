import { CardListPage } from "./cards-list/CardList";
import { CollectionPage } from "./collection/Collection";
import { Routes, Route, Outlet } from "react-router-dom";

export function AppRoutes() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="cardlist" element={<CardListPage />} />
            <Route path="collection" element={<CollectionPage />} />
          </Route>
        </Routes>
      }
    </>
  );
}
