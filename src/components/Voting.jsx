import React from 'react';

export default React.createClass({
    getPair: function() {
        return this.props.pair || [];
    },
    render: function() {
        var pair = this.getPair();
        console.log(pair);
        return (
            <div className="voting">
            {pair.map(entry =>
                <button key={entry} onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                </button>
            )}
            </div>
        );
    }
})
