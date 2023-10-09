import { useCallback, useReducer } from 'react';
import { reducer } from './reducer';
import {
  OPEN_PHOTO_DETAILS_MODAL,
  CLOSE_PHOTO_DETAILS_MODAL
} from './constants'

const defaultState = {
  selectedPhoto: null,
  isDetailsModalOpen: false
};

export const usePhotoDetailsModalController = () => {
  const [{
    selectedPhoto,
    isDetailsModalOpen
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
  
  return {
    // state
    selectedPhoto,
    isDetailsModalOpen,

    // actions
    openPhotoDetailsModalAction,
    closePhotoDetailsModalAction
  };
}