import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.jsx";
import ProductPage from "./pages/productPage/ProductPage.jsx";
import SearchPage from "./pages/searchPage/SearchPage.jsx";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '*', element: <NotFoundPage/> },
    { path: '/product/:id', element: <ProductPage/> },
    { path: '/search/*', element: <SearchPage/> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
