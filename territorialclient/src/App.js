import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SubmitLayout from "./pages/SubmitLayout";
import SubmitPage from "./pages/SubmitPage";
import LoginPage from "./pages/LoginPage";
import CustomersPage from "./pages/CustomersPage";
import CustomerOrderPage from "./pages/CustomerOrderPage";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "submit",
          element: <SubmitLayout />,
          children: [
            {
              path: "",
              element: <SubmitPage />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
          ],
        },
        {
          path: "customers",
          children: [
            {
              index: true,
              element: <CustomersPage />,
            },
            {
              path: ":id",
              id: "customer-id",
              element: <CustomerOrderPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
