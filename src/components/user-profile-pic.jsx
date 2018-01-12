import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Issue.css';

const UserProfilePic = ({ user }) => {


    return (
        <a href={user.html_url}>
            <img src={user.avatar_url} className="profile-pic"/>
        </a>
    );
};

UserProfilePic.propTypes = {
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.node),
    //     PropTypes.node
    // ])
};

export default UserProfilePic;
