import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import '../styles/Issue.css';

const Issue = ({ issue }) => {

    // const renderListItem = issue => <Issue issue={issue} />

    return (
        <li className="box-row">
            <Row>
                <Col xs={1}>something</Col>
                <Col xs={9}><span className="h4 link-gray-dark">{issue.title}</span></Col>
                <Col xs={2}>something</Col>
            </Row>
            <Row>
                <Col xs={10} xsOffset={2}><span>#{issue.number} open {issue.timeSince}</span></Col>
            </Row>
        </li>
    );
};

Issue.propTypes = {
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.node),
    //     PropTypes.node
    // ])
};

export default Issue;
