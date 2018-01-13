import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';
import { loadIssues } from '../actions/issue-action-creators';
import { issuesSelector, isFetchingIssues } from '../selectors/issue-selectors';
import IssuesList from '../components/issues-list';


export class IssuesContainer extends Component {

    componentDidMount() {
        this.props.loadIssues();
    }

    render() {
        return (
            <Grid>
            {this.props.isFetchingIssues
                ? <h2>Loading...</h2>
                : (this.props.errorState
                    ? <h4>{this.props.errorState.message}</h4>
                    : <IssuesList issues={this.props.issues} />)}
            </Grid>
        );
    }
};

IssuesContainer.propTypes = {
    issues: PropTypes.array
};

const mapStateToProps = (state) => ({
    issues: issuesSelector(state),
    isFetchingIssues: isFetchingIssues(state),
    errorState: state.uiState.error
});

const mapDispatchToProps = (dispatch) => ({
    loadIssues: () => dispatch(loadIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(IssuesContainer);
