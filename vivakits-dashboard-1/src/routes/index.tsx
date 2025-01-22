import { RouteObject } from "react-router-dom";
import MainLayout from "../features/layout/MainLayoout";
import Home from "../Pages/Home";
import SettingsPage from "../Pages/Settings";
import AboutPage from "../Pages/About";
import NotFound from "../Pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <MainLayout>
        <SettingsPage />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <AboutPage />
      </MainLayout>
    ),
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
