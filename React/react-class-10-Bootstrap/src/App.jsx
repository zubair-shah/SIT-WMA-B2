import './App.css'
import './assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<div><Home /></div>),
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
