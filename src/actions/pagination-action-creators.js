import GithubService from '../services/github-service';
import {
    PAGINATION_CLICK
} from './types/pagination-action-types';
import { loadIssues } from './issue-action-creators';


const paginationClick = (pageNum) => ({ type: PAGINATION_CLICK, pageNum });

// const loadIssuesSuccess = response => ({ type: ISSUES_LOAD_SUCCESS, response });

// const loadIssuesFailure = error => ({ type: ISSUES_LOAD_FAILURE, error });

export const handlePaginationClick = (pageNum) => {
    return (dispatch, getState) => {
        // const state = getState();
        dispatch(paginationClick(pageNum));
        dispatch(loadIssues());
    };
};
