import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Well } from 'react-bootstrap';
import { loadIssues } from '../actions/issue-action-creators';
import { issuesSelector } from '../selectors/issue-selectors';

export class IssuesContainer extends Component {

    componentDidMount() {
        this.props.loadIssues();
    }

    render() {
        return (
            <div>
            issues container
            {this.props.issues.map(issue => <div key={issue.id}>{issue.title}</div>)}
            </div>
        );
    }
};

IssuesContainer.propTypes = {
    issues: PropTypes.array
};

const mapStateToProps = (state) => ({
    issues: issuesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadIssues: () => dispatch(loadIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(IssuesContainer);
