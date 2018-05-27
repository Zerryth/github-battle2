import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    textAlign: 'center',
    fontSize: '35px'
};

class Loading extends React.Component {
    // with babel transform class property, transform state to property of the class
    state = {
        text: this.props.text
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        speed: PropTypes.number.isRequired
    }

    static defaultProps = {
        text: 'Loading',
        speed: 300
    }

    componentDidMount() {
        const { text, speed } = this.props;
        const stopper = text + '...';

        this.interval = window.setInterval(() => {
            this.state.text === stopper
            ? this.setState(() => ({text: this.props.text}))
            : this.setState((prevState) =>({text: prevState.text + '.'}))
        }, speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <h1 className='loading'> {this.state.text} </h1>
        )
    }
}



export default Loading;