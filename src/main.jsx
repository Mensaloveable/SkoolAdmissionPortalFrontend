import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import CombinedRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([...CombinedRoutes]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
