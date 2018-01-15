import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Issue.css';

const IssueTableHeader = () => {

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

export default IssueTableHeader;
