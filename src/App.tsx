import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";

function App() {
  const queryClient = new QueryClient();

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <BasicRouter />,
  //     children: BasicRouterChildrens,
  //   },
  //   {
  //     path: "account",
  //     element: <AccountRouter />,
  //     children: AccountRouterChildrens,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Link to="/game">Godot Game Links</Link>} /> */}
          <Route
            path="/"
            element={
              <iframe
                src="/godot-export/index.html"
                title="Godot Game Test HTML"
                width="100vw"
                height="100vh"
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
