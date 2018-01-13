import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../styles/Issue.css';

const UserProfilePic = ({ user }) => {

    const tooltip = (
        <Tooltip id={`profile-pic-tooltip:${user.id}`}>
            <span>{user.login}</span>
        </Tooltip>
    );

    return (
        <a href={user.html_url}>
            <OverlayTrigger placement="top" overlay={tooltip}>
                <img src={user.avatar_url} className="profile-pic"/>
            </OverlayTrigger >
        </a>
        
    );
};

UserProfilePic.propTypes = {
    user: PropTypes.object
};

export default UserProfilePic;
