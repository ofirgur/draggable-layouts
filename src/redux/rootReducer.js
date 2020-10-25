import { combineReducers } from 'redux';

import appSlice from './appSlice';
import layoutsSlice from './layoutsSlice';

export default combineReducers({
    app: appSlice,
    layout: layoutsSlice
});