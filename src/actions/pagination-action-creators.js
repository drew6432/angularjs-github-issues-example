import GithubService from '../services/github-service';
import {
    PAGINATION_CLICK
} from './types/pagination-action-types';
import { loadIssues } from './issue-action-creators';


const paginationClick = (pageNum) => ({ type: PAGINATION_CLICK, pageNum });

export const handlePaginationClick = (pageNum) => {
    return (dispatch, getState) => {
        dispatch(paginationClick(pageNum));
        dispatch(loadIssues());
    };
};
