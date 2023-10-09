import {
  TOGGLE_PHOTO_FAVORITE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA
} from './constants';

export const reducer = (state, action) => {
  const { type, payload } = action;
  const nextState = { ...state };

  switch (type) {
    /* ---------------------------- Toggle favorites ---------------------------- */
    case TOGGLE_PHOTO_FAVORITE: {
      const { photoId } = payload;
      const previousFavoriteState = !!state.favorites[photoId];

      nextState.favorites = {
        ...state.favorites,
        [photoId]: !previousFavoriteState
      };

      break;
    }

    /* ------------------------------ Storing data ------------------------------ */
    case SET_PHOTO_DATA: {
      const { photos } = payload;
      nextState.photos = photos;

      break;
    }
    case SET_TOPIC_DATA: {
      const { topics } = payload;
      nextState.topics = topics;

      break;
    }

    default: {
      throw new Error(
        `Tried to reduce with unsupported action type: ${type}`
      );
    }
  }

  return nextState;
}
