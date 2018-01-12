import { createSelector } from 'reselect';
import { get } from 'lodash';
import moment from 'moment';

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
    (issueIds, issueMap) => issueIds.map(id => ({ ...issueMap[id], timeSince: timeDifference(issueMap[id])}))
);