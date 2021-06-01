import React from 'react';

import '../sidebar.css';

export class QuerySelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            queryType: 'radial',
            sliderVal: '50'
        };
    }

    render() {
        return (
            <div className='section-outer'>
                <div className='section-inner'>
                    <div style={{display: 'table', width: '100%', borderBottom: '1px solid white'}}>
                        <h4 style={{display: 'table-cell'}}>Type:</h4>
                        <div style={{display: 'table-cell', textAlign: 'right'}}>
                            <select value={this.state.queryType} onChange={(e) => this.setState({queryType: e.target.value})}>
                                <option value='radial'>radial</option>
                                <option value='county'>county</option>
                                <option value='custom'>custom</option>
                            </select>
                        </div>
                    </div>
                    {this.renderContent()}
                </div>
            </div>
        );
    }

    renderContent() {
        if (this.state.queryType === 'radial')
            return this.renderRadial();
    }

    renderRadial() {
        return (
            <div style={{padding: '10px'}}>
                <div style={{display: 'table', width: '100%'}}>
                    <p style={{display: 'table-cell'}}>Use Current Location:</p>
                    <div style={{display: 'table-cell', textAlign: 'right'}}>
                        <input type='checkbox'/>
                    </div>
                </div>
                <div>
                    Center:
                    <div style={{display: 'table', width: '75%', margin: 'auto'}}>
                        <p style={{display: 'table-cell'}}>Latitude:</p>
                        <p style={{display: 'table-cell', textAlign: 'right'}}>0.0000</p>
                    </div>
                    <div style={{display: 'table', width: '75%', margin: 'auto'}}>
                        <p style={{display: 'table-cell'}}>Longitude:</p>
                        <p style={{display: 'table-cell', textAlign: 'right'}}>0.0000</p>
                    </div>
                </div>
                <div>
                    <div style={{display: 'table', width: '100%'}}>
                        <p style={{display: 'table-cell'}}>Radius:</p>
                        <p style={{display: 'table-cell', textAlign: 'right'}}>50km</p>
                    </div>
                    <div style={{margin: 'auto'}}>
                        <input type='range' min='0' max='100' step='10'/>
                    </div>
                </div>
            </div>
        );
    }
}