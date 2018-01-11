import axios from 'axios';
import { get } from 'lodash';
import { normalize, schema } from 'normalizr';

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

    getAngularIssues() {
        return this.client.get('/repos/angular/angular/issues')
            .then( response => {
                return normalize(get(response, 'data', []), issuesSchema);
            })
    }
}