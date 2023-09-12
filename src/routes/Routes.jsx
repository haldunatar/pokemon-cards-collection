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

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      }
    </>
  );
}
