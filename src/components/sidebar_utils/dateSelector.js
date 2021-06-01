import React from 'react';
import DatePicker from "react-datepicker";

export class DateSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date('01/01/2020')
        };
    }
    render() {
        return (
            <div className='section-outer'>
                <div className='section-inner'>
                    <div style={{display: 'table', width: '100%', borderBottom: '1px solid white'}}>
                        <h4 style={{display: 'table-cell'}}>Date:</h4>
                        <div style={{display: 'table-cell', textAlign: 'right'}}>
                            <DatePicker selected={this.state.date} popperPlacement='bottom-end'/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}