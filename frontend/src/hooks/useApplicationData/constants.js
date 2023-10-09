export const TOGGLE_PHOTO_FAVORITE = 'TOGGLE_PHOTO_FAVORITE';
export const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
export const SET_TOPIC_DATA = 'SET_TOPIC_DATA';

/* -------------------------------- Endpoints ------------------------------- */
const API_URL_BASE = 'http://localhost:8001/api';
export const API_URL_PHOTOS = `${API_URL_BASE}/photos`;
export const API_URL_TOPICS = `${API_URL_BASE}/topics`;

// http://localhost:8001/api/topics/photos/:topicId
export const API_URL_PHOTOS_BY_TOPIC = `${API_URL_TOPICS}/photos`;