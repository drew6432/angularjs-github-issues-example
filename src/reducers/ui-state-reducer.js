import { combineReducers } from 'redux';
import { get } from 'lodash';
import {
    ISSUES_LOAD,
    ISSUES_LOAD_SUCCESS,
    ISSUES_LOAD_FAILURE
} from '../actions/types/issue-action-types';
import {
    PAGINATION_CLICK,
} from '../actions/types/pagination-action-types';
import config from '../config/config.json';

const initialState = {
        current: {
            url: `${config.GITHUB_URL}/repos/angular/angular/issues`,
            pageNum: 1
        },
        clickedPageNum: 1
}

const pagination = (state = initialState, {type, response, pageNum}) => {
    switch (type) {
        case ISSUES_LOAD_SUCCESS:
            return { ...get(response, 'pagination', {}) };
        case PAGINATION_CLICK:
            return { ...state, clickedPageNum: pageNum };
        default:
            return state;
    }
};

const errorState = (state = null, {type, error}) => {
    switch (type) {
        case ISSUES_LOAD_FAILURE:
            return error;
        default:
            return state;
    }
};


export default combineReducers({
    pagination,
    errorState
});
