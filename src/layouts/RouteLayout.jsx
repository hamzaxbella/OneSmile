// RouteLayout.jsx
import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { CopyRight } from "../components/CopyRight";
import { Map } from "../components/Map";

export const RouteLayout = () => {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <NavBar />
      <main>
        <Outlet /> {/* Render the child routes here */}
      </main>
      <Map />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default RouteLayout;
