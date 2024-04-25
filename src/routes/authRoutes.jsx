import { ErrorPage } from "../components/Error";
import { Home } from "../components/Home";
import { LandingPage } from "../pages/LandingPage";

export const AuthRoutes = [
  <h1 key={1}>Hello</h1>,
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  // { path: "/", element: <LandingPage /> },
  // {
  //   path: "/login", // Define a route for the login page
  //   element: <LandingPage />, // Use the LoginPage component for the login page
  // },
];
