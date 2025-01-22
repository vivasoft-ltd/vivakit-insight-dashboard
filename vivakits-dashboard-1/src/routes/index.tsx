import { RouteObject } from "react-router-dom";
import MainLayout from "../features/layout/MainLayoout";
import Home from "../pages/Home";
import SettingsPage from "../pages/Settings";
import AboutPage from "../pages/About";
import NotFound from "../pages/NotFound";

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
