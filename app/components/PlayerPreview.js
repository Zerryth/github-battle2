var React = require('react');
var PropTypes = require('prop-types');

function PlayerPreview (props) {
    return (
        <div>
            <div className='colum'>
                <img
                    className='avatar'
                    src={props.avatar}
                    alt={'Avatar for ' + props.username}
                />
                <h2 className='username'>@{props.username}</h2>
            </div>
            {props.children}
        </div>
    )
}

module.exports = PlayerPreview;