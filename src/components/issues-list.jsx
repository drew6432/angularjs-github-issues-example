import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Issue from './issue';

const IssuesList = ({ issues }) => {

    const renderListItem = issue => <Issue issue={issue} key={issue.id} />

    return (
        <ListGroup componentClass="ul">
            {issues.map(renderListItem)}
        </ListGroup>
    );
};

IssuesList.propTypes = {
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.node),
    //     PropTypes.node
    // ])
};

export default IssuesList;
