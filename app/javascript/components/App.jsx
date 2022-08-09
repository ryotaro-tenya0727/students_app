import React from 'react';

import { Routers } from './route/Routers';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const App = () => {
  return <Routers />;
};

export default App;
