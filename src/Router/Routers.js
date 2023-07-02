import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Router,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayOut from "../Layout/MainLayOut";
function Routers() {
  return (
    <BrowserRouter className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayOut>
              <Dashboard />
            </MainLayOut>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
