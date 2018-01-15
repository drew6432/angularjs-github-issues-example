import { combineReducers } from 'redux';
import { get } from 'lodash';
import {
    ISSUES_LOAD,
    ISSUES_LOAD_SUCCESS,
    ISSUES_LOAD_FAILURE
} from '../actions/types/issue-action-types';

const byId = (state = {}, {type, response}) => {
    switch (type) {
        case ISSUES_LOAD_SUCCESS:
            return get(response, 'entities.users', {});
        case ISSUES_LOAD:
        case ISSUES_LOAD_FAILURE:
            return {};
        default:
            return state;
    }
};


export default combineReducers({
    byId
});
