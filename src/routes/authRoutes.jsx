import { ErrorPage } from "../components/Error";
import { LandingPage } from "../pages/Auth/LandingPage";
import { LoginPage } from "../pages/Auth/LoginPage";

export const AuthRoutes = [
  <h1 key={1}>Hello</h1>,
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
