import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MyBar } from "./components/myBar/MyBar.jsx";
import { BodyData } from "./components/home/BodyData.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Default Layout: MyBar */}
      <Route element={<MyBar />}>
        <Route index element={<BodyData />} />
        <Route
          path="*"
          element={
            <div className="text-center h-screen mx-auto flex flex-col text-5xl">
              <span className="text-red-500 pt-20">404!</span>
              <span className="text-black dark:text-gray-400 text-3xl">
                Page not found in MyBar
              </span>
            </div>
          }
        />
      </Route>

      {/* Alternate Layout: MyBar2 */}
      
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
