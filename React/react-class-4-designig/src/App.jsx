import './App.css'
import './assets/css/responsive.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default App
