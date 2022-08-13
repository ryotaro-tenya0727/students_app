import React from 'react';

import { Routers } from './route/Routers';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Routers />
    </RecoilRoot>
  );
};

export default App;
