import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerPreview ({ avatar, username, children }) {
    return (
        <div>
            <div className='colum'>
                <img
                    className='avatar'
                    src={avatar}
                    alt={'Avatar for ' + username}
                />
                <h2 className='username'>@{username}</h2>
            </div>
            {children}
        </div>
    )
}