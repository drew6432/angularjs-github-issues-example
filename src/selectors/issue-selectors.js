import { createSelector } from 'reselect';
import { get } from 'lodash';
import moment from 'moment';
import { getUserMap } from './user-selector';

const getIssueMap = state => get(state, 'issues.byId', {});
const getIssueIds = state => get(state, 'issues.allIds', []);
export const isFetchingIssues = state => Boolean(get(state, 'issues.isLoading'));

function timeDifference(issue) {
    const diff = moment.duration(issue.created_at).humanize();
        return `opened ${diff}`;
}

export const issuesSelector = createSelector(
    getIssueIds,
    getIssueMap,
    getUserMap,
    (issueIds, issueMap, userMap) => issueIds.map(id => {
        const issue = issueMap[id];
        return {
            ...issue,
            timeSince: timeDifference(issue),
            user: userMap[issue.user],
            assignee: userMap[issue.assignee]
        }
    }).filter(issue => !issue.pull_request)
);