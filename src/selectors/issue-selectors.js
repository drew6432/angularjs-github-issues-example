import { createSelector } from 'reselect';
import { get } from 'lodash';

const getIssueMap = state => get(state, 'issues.byId', {});
const getIssueIds = state => get(state, 'issues.allIds', []);


export const issuesSelector = createSelector(
    getIssueIds,
    getIssueMap,
    (issueIds, issueMap) => issueIds.map(id => issueMap[id])
);