import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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


  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/services-and-solutions">
            <ServicesSolutions />
          </Route>

          <Route exact path="/services">
            <Services />
          </Route>

          <Route path="/services/it-support-system">
            <ITSupportSystem />
          </Route>

          <Route path="/services/professional-services">
            <ProfessionalServices />
          </Route>

          <Route path="/services/integration">
            <Integration />
          </Route>

          <Route path="/services/networking-security">
            <NetworkingSecurity />
          </Route>

          <Route exact path="/solutions">
            <Solutions />
          </Route>

          <Route path="/solutions/core-infrastructure">
            <CoreInfrastructure />
          </Route>

          <Route path="/solutions/systems">
            <Systems />
          </Route>

          <Route path="/solutions/cloud-computing">
            <CloudComputing />
          </Route>

          <Route path="/solutions/data-center">
            <DataCenter />
          </Route>

          <Route exact path="/partners">
            <Partners />
          </Route>

          <Route path="/partners/it-service-management">
            <ITServiceManagement />
          </Route>

          <Route path="/partners/cloud-infrastructure">
            <CloudInfrastructure />
          </Route>

          <Route path="/partners/it-security">
            <ITSecurity />
          </Route>

          <Route path="/partners/business-application">
            <BusinessApplication />
          </Route>

          <Route path="/partners/backup-recovery">
            <BackupRecovery />
          </Route>

          <Route path="/partners/volume-licensing">
            <VolumeLicensing />
          </Route>

          <Route path="/partners/communication-collaboration">
            <CommunicationCollaboration />
          </Route>

          <Route path="*">
            <ErrorPage />
          </Route>

        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
