import React from 'react';
import useDisplay from '../../utils/useDisplay';
import BigScreenLayout from '../../layouts/BigScreensLayout/index';
import SmallScreensLayout from '../../layouts/SmallScreensLayout';

const Page404 = () => {
  const isMobile = useDisplay();
  if (isMobile === 'l') {
    return (
      <BigScreenLayout>
        <div>
          <h1>Welcome to MeWizard</h1>
          <p>404 page not found</p>
        </div>
      </BigScreenLayout>
    );
  }
  return (
    <SmallScreensLayout>
      <div>
        <h1>Welcome to MeWizard</h1>
        <p>404 page not found</p>
      </div>
    </SmallScreensLayout>
  );
};

export default Page404;
