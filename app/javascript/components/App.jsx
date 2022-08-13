import React from 'react';

import { Routers } from './route/Routers';
import { RecoilRoot } from 'recoil';
import { DefaultLayout } from './layout';

const App = () => {
  return (
    <RecoilRoot>
      <DefaultLayout>
        <Routers />
      </DefaultLayout>
    </RecoilRoot>
  );
};

export default App;
