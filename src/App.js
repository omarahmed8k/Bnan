import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import i18n from "./assets/helpers/i18n";
import { checkFixLang } from "./assets/helpers/lang";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ServicesSolutions from "./pages/ServicesSolutions/ServicesSolutions";
import Services from "./pages/Services/Services.jsx";
import Solutions from "./pages/Solutions/Solutions";
import Partners from "./pages/Partners/Partners";
import ITSupportSystem from "./pages/Services/ITSupportSystem/ITSupportSystem";
import ProfessionalServices from "./pages/Services/ProfessionalServices/ProfessionalServices";
import Integration from "./pages/Services/Integration/Integration";
import NetworkingSecurity from "./pages/Services/NetworkingSecurity/NetworkingSecurity";
import CoreInfrastructure from "./pages/Solutions/CoreInfrastructure/CoreInfrastructure";
import Systems from "./pages/Solutions/Systems/Systems";
import CloudComputing from "./pages/Solutions/CloudComputing/CloudComputing";
import DataCenter from "./pages/Solutions/DataCenter/DataCenter";
import ITServiceManagement from "./pages/Partners/ITServiceManagement/ITServiceManagement";
import CloudInfrastructure from "./pages/Partners/CloudInfrastructure/CloudInfrastructure";
import ITSecurity from "./pages/Partners/ITSecurity/ITSecurity";
import BusinessApplication from "./pages/Partners/BusinessApplication/BusinessApplication";
import BackupRecovery from "./pages/Partners/BackupRecovery/BackupRecovery";
import VolumeLicensing from "./pages/Partners/VolumeLicensing/VolumeLicensing";
import CommunicationCollaboration from "./pages/Partners/CommunicationCollaboration/CommunicationCollaboration";

function App() {
  const lang = i18n.language;
  useEffect(() => {
    checkFixLang(lang);
  }, [lang]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "services-and-solutions",
          element: <ServicesSolutions />,
        },
        {
          path: "services",
          element: <Services />,
          children: [
            {
              path: "it-support-system",
              element: <ITSupportSystem />,
            },
            {
              path: "professional-services",
              element: <ProfessionalServices />,
            },
            {
              path: "integration",
              element: <Integration />,
            },
            {
              path: "networking-security",
              element: <NetworkingSecurity />,
            },
          ],
        },
        {
          path: "solutions",
          element: <Solutions />,
          children: [
            {
              path: "core-infrastructure",
              element: <CoreInfrastructure />,
            },
            {
              path: "systems",
              element: <Systems />,
            },
            {
              path: "cloud-computing",
              element: <CloudComputing />,
            },
            {
              path: "data-center",
              element: <DataCenter />,
            },
          ],
        },

        {
          path: "partners",
          element: <Partners />,
          children: [
            {
              path: "it-service-management",
              element: <ITServiceManagement />,
            },
            {
              path: "cloud-infrastructure",
              element: <CloudInfrastructure />,
            },
            {
              path: "it-security",
              element: <ITSecurity />,
            },
            {
              path: "business-application",
              element: <BusinessApplication />,
            },
            {
              path: "backup-recovery",
              element: <BackupRecovery />,
            },
            {
              path: "volume-licensing",
              element: <VolumeLicensing />,
            },
            {
              path: "communication-collaboration",
              element: <CommunicationCollaboration />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
