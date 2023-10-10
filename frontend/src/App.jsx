import React from 'react';

import './App.scss';
import { AppContextProvider } from './AppContextProvider';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import FavoritesModal from 'routes/FavoritesModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <HomeRoute />
        <PhotoDetailsModal />
        <FavoritesModal />
      </AppContextProvider>
    </div>
  );
};

export default App;
