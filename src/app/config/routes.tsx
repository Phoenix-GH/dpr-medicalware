import * as React from 'react';

import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// Routes
import Routes from 'app/constants/routes';
// Pages
import HomePage from 'app/containers/Home';
import ProgramPage from 'app/containers/Program';
import GuaranteePage from 'app/containers/Guarantee';
import PricingPage from 'app/containers/Pricing';
import LocationsPage from 'app/containers/Locations';
import FAQPage from 'app/containers/FAQ';
import DoctorsPage from 'app/containers/Doctors';

import AboutUsPage from 'app/containers/AboutUs';
import PrivacyPolicyPage from 'app/containers/PrivacyPolicy';
import HippaPrivacyPage from 'app/containers/HippaPrivacy';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={HomePage} />

    <Route path={Routes.program} component={ProgramPage} />
      <Route path={Routes.guarantee} component={GuaranteePage} />
      <Route path={Routes.pricing} component={PricingPage} />
      <Route path={Routes.locations} component={LocationsPage} />
      <Route path={Routes.faq} component={FAQPage} />
      <Route path={Routes.aboutUs} component={AboutUsPage} />
      <Route path={Routes.privacy} component={PrivacyPolicyPage} />
      <Route path={Routes.hippa} component={HippaPrivacyPage} />
      <Route path={Routes.doctors} component={DoctorsPage} />
    </Switch>
));
