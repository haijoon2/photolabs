import React, { createContext, useContext } from "react";
import { useApplicationData, usePhotoDetailsModalController } from 'hooks';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  /* -------------------------------- App data -------------------------------- */
  const {
    favorites,
    photos,
    topics,
    toggleFavoriteAction,
    fetchPhotosByTopicAction
  } = useApplicationData();

  /* ------------------------ Details modal controller ------------------------ */
  const {
    selectedPhoto,
    isDetailsModalOpen,
    openPhotoDetailsModalAction,
    closePhotoDetailsModalAction
  } = usePhotoDetailsModalController();

  return (
    <AppContext.Provider
      value={{
        // app data
        favorites,
        photos,
        topics,
        toggleFavoriteAction,
        fetchPhotosByTopicAction,

        // PhotoDetailsModal related
        selectedPhoto,
        isDetailsModalOpen,
        openPhotoDetailsModalAction,
        closePhotoDetailsModalAction
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);