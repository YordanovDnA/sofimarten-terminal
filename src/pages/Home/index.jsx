import React from 'react';
import useDisplay from '../../utils/useDisplay/index';
import BigScreenLayout from '../../layouts/BigScreensLayout/index';
import SmallScreensLayout from '../../layouts/SmallScreensLayout/index';

const Home = () => {
  const isMobile = useDisplay();
  if (isMobile === 'l') {
    return (
      <BigScreenLayout>
        <div>
          <h1>Welcome to MeWizard</h1>
        </div>
      </BigScreenLayout>
    );
  }
  return (
    <SmallScreensLayout>
      <div><h1>Welcome to MeWizard</h1></div>
    </SmallScreensLayout>
  );
};

export default Home;
