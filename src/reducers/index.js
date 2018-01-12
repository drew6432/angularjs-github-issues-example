import { combineReducers } from 'redux';
// import { get } from 'lodash';
import issues from './issues-reducer';
import users from './users-reducer';
import uiState from './ui-state-reducer';

export default combineReducers({
    issues,
    users,
    uiState
});
