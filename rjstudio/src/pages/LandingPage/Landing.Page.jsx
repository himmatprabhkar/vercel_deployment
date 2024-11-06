import React from 'react';
import { Header } from '../../layout/Header/Header';
import { Footer } from '../../layout/Footer/Footer';

import { MainComponent } from '../../components/mainComponents/main.components';

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
};
