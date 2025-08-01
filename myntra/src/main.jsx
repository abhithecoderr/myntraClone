import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";
import { Provider, useDispatch } from "react-redux";
import myntraStore from "./store/index.js";
import { itemsActions } from "./store/itemsSlice.js";

const homeLoader = async () => {
  const res = await fetch("http://localhost:3000/items");
  const itemsObj = await res.json();
  myntraStore.dispatch(itemsActions.addItems(itemsObj.items));
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
