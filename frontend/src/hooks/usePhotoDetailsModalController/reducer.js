import {
  OPEN_PHOTO_DETAILS_MODAL,
  CLOSE_PHOTO_DETAILS_MODAL
} from './constants';

export const reducer = (state, action) => {
  const { type, payload } = action;
  const nextState = { ...state };

  switch (type) {
    case OPEN_PHOTO_DETAILS_MODAL: {
      const { selectedPhoto } = payload;

      nextState.selectedPhoto = selectedPhoto;
      nextState.isDetailsModalOpen = true;

      break;
    }

    case CLOSE_PHOTO_DETAILS_MODAL: {
      nextState.selectedPhoto = null;
      nextState.isDetailsModalOpen = false;

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
