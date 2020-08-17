import React, { Component } from 'react'

export default class ReadOnlyFields extends Component {
    render() {
        const {label, value, type, percent} = this.props;
       
        const percentString = percent && `${percent}%`;

        return (
            <div className="main-container">
                <strong className={type}>{label} {percentString}</strong>
                <input type="number" readOnly value={value.toFixed(2)}/>
          </div>
        )
    }
}
