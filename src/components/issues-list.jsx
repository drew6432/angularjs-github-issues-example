import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Issue from './issue';
import IssueTableHeader from './issue-table-header';
import '../styles/Issue.css';

const IssuesList = ({ issues }) => {

    const renderListItem = (issue, index) => <Issue issue={issue} key={issue.id} index={index}/>

    return (
        <ListGroup componentClass="ul">
            <IssueTableHeader />
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
