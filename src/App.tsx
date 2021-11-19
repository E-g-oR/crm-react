import React from 'react';
import { initializeApp } from 'firebase/app';
import { Store } from './utils/store';
import { observer } from 'mobx-react';
import firebaseConfig from './utils/store/authStore/firebaseConfig';
import Root from './layouts/Routes/Root';
import { getDatabase } from '@firebase/database';


const App: React.FC<{ store: Store }> = observer(({ store }) => {
  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app);
  return (
    <Root store={store} />
  );
})

export default App;
