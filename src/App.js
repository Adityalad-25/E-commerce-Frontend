import React from 'react';
import ProductList from './features/product-list/components/ProductList.js';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
// import Navbar from './features/navbar/Navbar';
// import {Counter} from './features/counter/Counter.js';
// import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetails';
import ProductDetailPage from './pages/ProductDetailPage.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
  },
  {
    path: "/product-list",
    element: <ProductList></ProductList>
  },
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
       
    </div>
  );
}

export default App;
