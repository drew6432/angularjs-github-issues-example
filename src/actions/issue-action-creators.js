import GithubService from '../services/github-service';
import {
    ISSUES_LOAD,
    ISSUES_LOAD_SUCCESS,
    ISSUES_LOAD_FAILURE
} from './types/issue-action-types';


const loadingIssues = () => ({ type: ISSUES_LOAD });

const loadIssuesSuccess = response => ({ type: ISSUES_LOAD_SUCCESS, response });

const loadIssuesFailure = error => ({ type: ISSUES_LOAD_FAILURE, error });

export const loadIssues = () => {
    return (dispatch, getState, config) => {
        // const state = getState();
        dispatch(loadingIssues());
        const githubServiceInstance = new GithubService(config);
        return githubServiceInstance.getAngularIssues(7)
        .then(
            response => {
                return dispatch(loadIssuesSuccess(response));
            },
            error => {
                return dispatch(loadIssuesFailure(error));
            }
        );
    };
};
