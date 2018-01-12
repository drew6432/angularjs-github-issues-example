import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import '../styles/Issue.css';

const IssueTableHeader = ({ issue }) => {

    // const renderListItem = issue => <Issue issue={issue} />

    return (
        <li className="box-row header">
            <Row>
            <Col xs={7} xsOffset={1}>
                <h4>Angular Issues</h4>
            </Col>
                <Col xs={2} xsOffset={2}>
                    <h4>Asignee</h4>
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
