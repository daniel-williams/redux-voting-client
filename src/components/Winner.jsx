import React from 'react'

export default React.createClass({
    render: function() {
        return (
            <div ref='winner'>
                The winner is {this.props.winner}!
            </div>
        );
    }
});
