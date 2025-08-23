import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/AppLayout";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { index: true, element: <Login /> },
        { path: "browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
