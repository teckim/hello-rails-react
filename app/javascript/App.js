import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchRandomMessageThunk } from "./store/slices/messagesSlice";
import ErrorPage from "./components/ErrorPage";
import GreetingView from "./components/GreetingView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GreetingView />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchRandomMessageThunk()), null);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
