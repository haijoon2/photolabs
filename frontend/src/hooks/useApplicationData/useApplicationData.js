import { useEffect, useCallback, useReducer } from 'react';
import { reducer } from './reducer';
import {
  TOGGLE_PHOTO_FAVORITE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  API_URL_PHOTOS,
  API_URL_TOPICS,
  API_URL_PHOTOS_BY_TOPIC_BASE
} from './constants'

const defaultState = {
  photoData: [],
  topicData: [],
  favorites: {}
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { photoData, topicData, favorites } = state;
  
  /* --------------------------------- Actions -------------------------------- */
  const toggleFavoriteAction = useCallback((photoId) => {
    dispatch({
      type: TOGGLE_PHOTO_FAVORITE,
      payload: { photoId }
    });
  }, [dispatch]);

  const setPhotoDataAction = useCallback((photoData) => {
    dispatch({
      type: SET_PHOTO_DATA,
      payload: { photoData }
    });
  }, [dispatch]);

  const setTopicDataAction = useCallback((topicData) => {
    dispatch({
      type: SET_TOPIC_DATA,
      payload: { topicData }
    });  
  }, [dispatch]);

  const fetchPhotosByTopicAction = useCallback((topicId) => {
    fetch(`${API_URL_PHOTOS_BY_TOPIC_BASE}/${topicId}`)
      .then((response) => response.json())
      .then(setPhotoDataAction)
      .catch((error) => { console.error(error) });
  }, [dispatch, setPhotoDataAction]);

  /* -------------------------- Initial data fetching ------------------------- */
  useEffect(() => {
    fetch(API_URL_PHOTOS)
      .then((response) => response.json())
      .then(setPhotoDataAction)
      .catch((error) => { console.error(error) });
  }, [dispatch, setPhotoDataAction]);

  useEffect(() => {
    fetch(API_URL_TOPICS)
      .then((response) => response.json())
      .then(setTopicDataAction)
      .catch((error) => { console.error(error) });
  }, [dispatch, setTopicDataAction]);
  
  return {
    // state
    favorites,
    photoData,
    topicData,

    // actions
    toggleFavoriteAction,
    fetchPhotosByTopicAction
  };
}