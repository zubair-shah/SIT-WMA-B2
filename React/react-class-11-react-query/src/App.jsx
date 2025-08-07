import './App.css'
import './assets/css/responsive.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home'
import Details from './pages/Details'
function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<div><Home /></div>),
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
    {
      path: "/details/:id",
      element: <Details />,
    }
  ]);


  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}


export default App
