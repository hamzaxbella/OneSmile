import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RouteLayout } from "./layouts/RouteLayout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
// import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Services } from "./pages/Services";
import { SitePlan } from "./pages/SitePlan";
import { TermsOfUse } from "./pages/TermsOfUse";
import { Animate } from "./Animate";
import { preloadCriticalResources, optimizeWebVitals } from "./utils/performance";

export const Context = React.createContext();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sitemap" element={<SitePlan />} />
        {/* <Route path="privacypolicy" element={<PrivacyPolicy />} /> */}
        <Route path="terms" element={<TermsOfUse />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  const [selectedLanguage, setSelectedLanguage] = useState("FR");

  // Performance optimizations on app load
  useEffect(() => {
    preloadCriticalResources();
    optimizeWebVitals();
  }, []);

  return (
    <div className="App overflow-x-hidden">
      <Context.Provider value={[selectedLanguage, setSelectedLanguage]} >
        <RouterProvider router={router} />
        <Animate />
      </Context.Provider>
    </div>
  );
}

export default App;
