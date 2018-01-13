import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Issue from './issue';
import IssueTableHeader from './issue-table-header';
import '../styles/Issue.css';
import PaginationContainer from '../containers/pagination-container'; 

const IssuesList = ({ issues }) => {

    const renderListItem = (issue, index) => <Issue issue={issue} key={issue.id} index={index}/>

    return (
        <div>
            <ListGroup componentClass="ul">
                <IssueTableHeader />
                {issues.map(renderListItem)}
            </ListGroup>
            <PaginationContainer />
        </div>
    );
};

IssuesList.propTypes = {
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.node),
    //     PropTypes.node
    // ])
};

export default IssuesList;
