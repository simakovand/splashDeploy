import { combineReducers } from 'redux';
import userReducer from './userReducer';
import statisticsReducer from './statisticsReducer';
import gameStateReducer from './gameStateReducer';
import roomsReducer from './roomsReducer';

import currRoomReducer from './currRoomReducer';
import currentRoomReducer from './currentRoomReducer';
import { skinReducer, userSkinsReducer } from './skinsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  stats: statisticsReducer,
  gameState: gameStateReducer,
  currRoom: currRoomReducer,
  rooms: roomsReducer,
  currentRoom: currentRoomReducer,
  skins: skinReducer,
  userSkins: userSkinsReducer,
});

export default rootReducer;
