import { createBrowserRouter } from "react-router";

// ----------------------------------------------------------------
// Root
// ----------------------------------------------------------------
import Root from "./Root";

// ----------------------------------------------------------------
// Page Imports
// ----------------------------------------------------------------
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import MainLayout from "./components/layouts/MainLayout";

// ----------------------------------------------------------------
// Routes
// ----------------------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            path: "/",
            Component: HomePage,
            index: true,
          },
          {
            path: "/about",
            Component: AboutPage,
          },
        ],
      },
    ],
  },
]);

export default router;
