import { useEffect, useCallback, useReducer } from 'react';
import { reducer } from './reducer';
import {
  TOGGLE_PHOTO_FAVORITE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA
} from './constants'
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const defaultState = {
  photoData: [],
  topicData: [],
  favorites: {}
};

export const useApplicationData = () => {
  const [{
    photoData,
    topicData,
    favorites
  }, dispatch] = useReducer(reducer, defaultState);

  
  /* ----------------------------- Action creators ---------------------------- */
  const toggleFavoriteAction = useCallback((photoId) => {
    dispatch({
      type: TOGGLE_PHOTO_FAVORITE,
      payload: { photoId }
    });
  }, []);
  /* ------------------------------------ - ----------------------------------- */

  /* ---------------------------- Initial data load --------------------------- */
  useEffect(() => {
    dispatch({
      type: SET_PHOTO_DATA,
      payload: { photoData: photos }
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SET_TOPIC_DATA,
      payload: { topicData: topics }
    });
  }, []);

  
  return {
    // state
    favorites,
    photoData,
    topicData,
    // actions
    toggleFavoriteAction
  };
}