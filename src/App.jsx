import "./App.css";
import { Header } from "./components/header/Header";
import { AppRoutes } from "./routes/Routes";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <>
      <AppProviders>
        <Header />
        <AppRoutes />

        <Outlet />
      </AppProviders>
    </>
  );
}

export default App;
