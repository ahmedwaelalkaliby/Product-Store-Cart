import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Componants/Layout/Layout'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
