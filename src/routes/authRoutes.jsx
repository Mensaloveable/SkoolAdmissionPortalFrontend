import { ErrorPage } from "../components/Error";
import { CreatePassword } from "../pages/Auth/CreatePassword";
import { LandingPage } from "../pages/Auth/LandingPage";
import { LoginPage } from "../pages/Auth/LoginPage";
import { PasswordRequest } from "../pages/Auth/PasswordRequest";
import { SignupPage } from "../pages/Auth/SignupPage";

export const AuthRoutes = [
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
      {
        path: "sign-up",
        element: <SignupPage />,
      },
      {
        path: "create-password",
        element: <CreatePassword />,
      },
      {
        path: "password-reset",
        element: <PasswordRequest />,
      },
    ],
  },
];
