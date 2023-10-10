import { useCallback, useReducer } from 'react';
import { reducer } from './reducer';
import {
  OPEN_PHOTO_DETAILS_MODAL,
  CLOSE_PHOTO_DETAILS_MODAL,
  OPEN_FAVORITES_MODAL,
  CLOSE_FAVORITES_MODAL
} from './constants'

const defaultState = {
  selectedPhoto: null,
  isDetailsModalOpen: false,
  isFavoritesModalOpen: false
};

export const useModalControllers = () => {
  const [{
    selectedPhoto,
    isDetailsModalOpen,
    isFavoritesModalOpen
  }, dispatch] = useReducer(reducer, defaultState);

  /* --------------------------------- Actions -------------------------------- */
  const openPhotoDetailsModalAction = useCallback((selectedPhoto) => {
    dispatch({
      type: OPEN_PHOTO_DETAILS_MODAL,
      payload: { selectedPhoto }
    });
  }, [dispatch]);

  const closePhotoDetailsModalAction = useCallback(() => {
    dispatch({
      type: CLOSE_PHOTO_DETAILS_MODAL
    });
  }, [dispatch]);

  const openFavoritesModalAction = useCallback(() => {
    dispatch({
      type: OPEN_FAVORITES_MODAL
    });
  }, [dispatch]);

  const closeFavoritesModalAction = useCallback(() => {
    dispatch({
      type: CLOSE_FAVORITES_MODAL
    });
  }, [dispatch]);
  
  return {
    // state
    selectedPhoto,
    isDetailsModalOpen,
    isFavoritesModalOpen,

    // actions
    openPhotoDetailsModalAction,
    closePhotoDetailsModalAction,
    openFavoritesModalAction,
    closeFavoritesModalAction
  };
}