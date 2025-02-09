import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import { Navigate } from "react-router-dom";
import { lazy } from "react";

const PremadeLists = lazy(() => import("./pages/Premade.page.js"));
const HomePage = lazy(() => import("./pages/Home.page.js"));
const AccountLookup = lazy(() => import("./pages/Lookup.page.js"));
const NoAccountTaskBuilder = lazy(() => import("./pages/TaskBuilder.page.js"));
export const routes = [
  { index: true, element: <Navigate to="quest-builder" replace /> },
  {
    path: "quest-builder",
    label: "Account Builder",
    element: <AccountLookup />,
  },
  {
    path: "task-list-builder",
    label: "Builder",
    element: <NoAccountTaskBuilder />,
  },
  {
    path: "premade",
    label: "Premade Lists",
    element: <PremadeLists />,
  },
];

const parentRoute = {
  path: "/",
  element: <Layout />,
  children: routes,
};
const router = createHashRouter([parentRoute]);

export function Router() {
  return <RouterProvider router={router} />;
}
