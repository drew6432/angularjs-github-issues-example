import axios from 'axios';
import { get } from 'lodash';
import { normalize, schema } from 'normalizr';
import moment from 'moment';
import { parseLinkHeader } from './utils';

const label = new schema.Entity('labels');
const user = new schema.Entity('users');
const issue = new schema.Entity('issues', {
    labels: [label],
    user: user,
    assignee: user,
    assignees: [user]
});

const issuesSchema = [issue];

export default class GithubService {
    constructor({ GITHUB_URL }) {
        this.client = axios.create({
            baseURL: GITHUB_URL,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        });
    }

    getAngularIssues(daysSince) {
        let requestUrl = '/repos/angular/angular/issues';

        if (daysSince) {
            requestUrl += `?since=${moment().subtract(daysSince, 'd').toISOString()}`;
        }
        return this.client.get(requestUrl)
            .then( response => {
                const noramlizedResponse = normalize(get(response, 'data', []), issuesSchema);
                return { ...noramlizedResponse, pagination: parseLinkHeader(response.headers.link)}
            })
    }
}