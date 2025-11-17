import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

import { DashboardLayout } from "./DashboardLayout";
import { InfoPage } from "./Info";
import { SettingsPage } from "./Settings";

// Root layout for the dashboard section
const rootRoute = createRootRoute({
  component: DashboardLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
});

// /dashboard/info
const infoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/info",
  component: InfoPage,
});

// /dashboard/settings
const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, infoRoute, settingsRoute]);

export const router = createRouter({
  routeTree,
  basepath: "/dashboard", // very important here
});

// Register types, as in the docs
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function DashboardApp() {
  return <RouterProvider router={router} />;
}
