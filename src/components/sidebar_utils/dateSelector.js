import React from 'react';
import DatePicker from "react-datepicker";

const MAX_DATE = new Date('01/01/2020');
const MIN_DATE = new Date('01/01/2020');

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
                            <DatePicker selected={this.state.date}
                                        maxDate={MAX_DATE}
                                        minDate={MIN_DATE}
                                        popperPlacement='bottom-end'/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}