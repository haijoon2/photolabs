import React, { useCallback, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const defaultDetailsModalProps = {
  photoId: undefined,
  isOpen: false
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [detailsModalProps, setDetailsModalProps] = useState(defaultDetailsModalProps);

  const handleOpenDetailsModal = useCallback((photoId) => {
    setDetailsModalProps({
      photoId,
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
          modalProps={detailsModalProps}
        />
      )}
    </div>
  );
};

export default App;
