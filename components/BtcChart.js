import React from 'react';

const data = [];

for (let x = 1; x <= 30; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * (100)) })
}

export default class BtcChart extends React.Component {
    state = {
        activePoint: null,

    }

    handlePointHover = (activePoint, e) => {
        this.setState({activePoint})
    }

    render() {
        const {activePoint} = this.state
        return (<div>
            {this.props.bpi[0]}
        </div>)
    }
}