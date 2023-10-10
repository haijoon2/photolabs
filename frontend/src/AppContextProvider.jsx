import React, { createContext, useContext } from "react";
import {
  useApplicationData,
  useModalControllers
} from 'hooks';

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

  /* ---------------------------- Modal controllers --------------------------- */
  const {
    selectedPhoto,
    isDetailsModalOpen,
    isFavoritesModalOpen,
    openPhotoDetailsModalAction,
    closePhotoDetailsModalAction,
    openFavoritesModalAction,
    closeFavoritesModalAction
  } = useModalControllers();

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
        isFavoritesModalOpen,
        openPhotoDetailsModalAction,
        closePhotoDetailsModalAction,
        openFavoritesModalAction,
        closeFavoritesModalAction
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);