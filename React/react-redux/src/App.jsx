import './App.css'
import './assets/css/responsive.css'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home'
import Details from './pages/Details'
import AdoptedPetContext from "./context/AdoptedPetContext";
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Counter from './pages/Counter';
function App() {
  const queryClient = new QueryClient();
  // top of App function body
  const adoptedPet = useState(null);
  console.log('adoptedPet', adoptedPet);
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
    },
    {
      path: "/counter",
      element: <Counter />,
    }
  ]);


  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {/* <AdoptedPetContext.Provider value={adoptedPet}> */}
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>

        {/* </AdoptedPetContext.Provider> */}

      </QueryClientProvider>
    </div>
  )
}


export default App
