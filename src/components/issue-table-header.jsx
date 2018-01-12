import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import '../styles/Issue.css';

const IssueTableHeader = ({ issue }) => {

    // const renderListItem = issue => <Issue issue={issue} />

    return (
        <li className="box-row header">
            <Row>
                <Col xs={2} xsOffset={10}>
                    <h5>asignee</h5>
                </Col>
            </Row>
        </li>
    );
};

IssueTableHeader.propTypes = {
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.node),
    //     PropTypes.node
    // ])
};

export default IssueTableHeader;
