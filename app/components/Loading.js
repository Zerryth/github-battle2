var React = require('react');
var PropTypes = require('prop-types');

var styles = {
    textAlign: 'center',
    fontSize: '35px'
};

class Loading extends React.Component {
    constructor (props) {
        super(props)    
        
        this.state = {
            text: props.text
        }
    }

    render() {
        return (
            <p style={styles.content}> {this.state.text} </p>
        )
    }
}

Loading.proptType = {
    text: PropTypes.string.isRequired
}

Loading.defaultProps = {
    text: 'Loading'
}

module.exports = Loading;