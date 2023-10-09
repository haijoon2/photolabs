import {
  TOGGLE_PHOTO_FAVORITE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA
} from './constants';

export const reducer = (state, action) => {
  const { type, payload } = action;
  const nextState = { ...state };

  switch (type) {
    case TOGGLE_PHOTO_FAVORITE: {
      const { photoId } = payload;
      const previousFavoriteState = !!state.favorites[photoId];

      nextState.favorites = {
        ...state.favorites,
        [photoId]: !previousFavoriteState
      };

      break;
    }

    case SET_PHOTO_DATA: {
      const { photoData } = payload;
      nextState.photoData = photoData;

      break;
    }

    case SET_TOPIC_DATA: {
      const { topicData } = payload;
      nextState.topicData = topicData;

      break;
    }

    default:
  }

  return nextState;
}
