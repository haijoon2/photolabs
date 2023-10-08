import React, { useCallback, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const defaultDetailsModalProps = {
  photoData: undefined,
  isOpen: false
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [detailsModalProps, setDetailsModalProps] = useState(defaultDetailsModalProps);

  const handleOpenDetailsModal = useCallback((photoData) => {
    setDetailsModalProps({
      photoData,
      isOpen: true
    });
  }, []);

  const handleCloseDetailsModal = useCallback(() => {
    setDetailsModalProps(defaultDetailsModalProps);
  }, [])

  return (
    <div className="App">
      <HomeRoute handleOpenDetailsModal={handleOpenDetailsModal} />
      {detailsModalProps.isOpen && (
        <PhotoDetailsModal
          handleCloseDetailsModal={handleCloseDetailsModal}
          photoData={detailsModalProps.photoData}
        />
      )}
    </div>
  );
};

export default App;
