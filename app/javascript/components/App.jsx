import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routers } from './route/Routers';

import { DefaultLayout } from './layout';

const App = () => {
  const [isCsrfLoading, setIsCsrfLoading] = useState(true);

  const getCsrfToken = async () => {
    await axios.get('http://localhost:3000/api/v1/show').catch((error) => {
      console.log('ログインエラー', error);
    });
    setIsCsrfLoading(false);
  };
  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <>
      {isCsrfLoading ? (
        <h1>
          セッション取得中あああああああああああああああああああああああああああああああああああああああああああああああああ
        </h1>
      ) : (
        <DefaultLayout>
          <Routers />
        </DefaultLayout>
      )}
    </>
  );
};

export default App;
