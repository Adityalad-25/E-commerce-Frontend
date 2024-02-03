import React from 'react';
import ProductList from './features/product-list/ProductList';
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
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
       
    </div>
  );
}

export default App;
