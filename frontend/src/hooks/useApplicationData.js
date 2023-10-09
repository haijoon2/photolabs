import { useState, useCallback } from 'react';

const defaultDetailsModalProps = {
  photoData: undefined,
  isOpen: false
};

export const useApplicationData = () => {
  const [detailsModalProps, setDetailsModalProps] = useState(defaultDetailsModalProps);
  const [favorites, setFavorites] = useState({});

  const handleToggleFavorite = useCallback((photoId) => {
    setFavorites((prev) => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  }, []);

  const handleOpenDetailsModal = useCallback((photoData) => {
    setDetailsModalProps({
      photoData,
      isOpen: true
    });
  }, []);

  const handleCloseDetailsModal = useCallback(() => {
    setDetailsModalProps(defaultDetailsModalProps);
  }, []);
  
  return {
    detailsModalProps,
    favorites,
    handleToggleFavorite,
    handleOpenDetailsModal,
    handleCloseDetailsModal
  };
}