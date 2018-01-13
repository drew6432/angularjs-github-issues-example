import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';
import UserProfilePic from './user-profile-pic';
import marked from 'marked';
import '../styles/Issue.css';


class Issue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({
            expanded: !prevState.expanded
          }));
    }

    createMarkup = () => {
        return {__html: marked(this.props.issue.body)};
      }

    render() {
        const { expanded } = this.state;
        const { issue, index } = this.props;

        
        return (
            <li className="box-row animated fadeIn" style={{ animationDelay: `${(index + 1) * 0.03}s` }}>
                <Row>
                    <Col xs={1}>
                        <a onClick={this.toggleCollapse} className="collapse-toggle">
                            <Glyphicon
                                glyph={expanded ? 'menu-down' : 'menu-right'}
                                />
                        </a>
                    </Col>
                    <Col xs={9}>
                        <Row>
                            <Col xs={12}><span className="h4 link-gray-dark" onClick={this.toggleCollapse}>{issue.title}</span></Col>

                        </Row>
                        <Row>
                            <Col xs={11}>
                            <span className="small">#{issue.number} opened by <a href={issue.user.html_url}>{issue.user.login}</a></span>
                            </Col>
                         </Row>
                    </Col>
                    <Col xs={2}>
                        {issue.assignee && <UserProfilePic user={issue.assignee} />}
                    </Col>
                </Row>
                {expanded && <Row className="animated easeIn">
                    <Col xs={12}>
                        <div className={`issue-body ${expanded && 'expanded'}`}>
                            <div dangerouslySetInnerHTML={this.createMarkup()} />
                        </div>
                    </Col>
                </Row>}
            </li>
        );
    }
};

Issue.propTypes = {
    issue: PropTypes.object,
    index: PropTypes.number
};

export default Issue;
