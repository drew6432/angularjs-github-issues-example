import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

export class PaginationContainer extends Component {

    render() {
        return (
            <Grid>
            {this.props.isFetchingIssues
                ? <h2>Loading...</h2>
                : <IssuesList issues={this.props.issues} />}
            </Grid>
        );
    }
};

PaginationContainer.propTypes = {
    issues: PropTypes.array
};

const mapStateToProps = (state) => ({
    // issues: issuesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    loadIssues: () => dispatch(loadIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
