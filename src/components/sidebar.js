import React from 'react';
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
import './sidebar.css';


export class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date('05/20/2020'),
            isOpen: false
        }
        this.sidebar = React.createRef();
    }

    render() {
        return (
            <div id='mySidebar' className='sidebar' ref={this.sidebar}>
                <div className='header'>
                    <h3 style={{display: 'table-cell'}}>Query-Builder</h3>
                    <div style={{display: 'table-cell', textAlign: 'right'}}>
                        <button className='btn' onClick={this.toggleSidebar.bind(this)}>&times;</button>
                    </div>
                </div>
                <div className='section-outer'>
                    <div className='section-inner'>
                        Date:
                        <br/>
                        <DatePicker selected={new Date()}/>
                    </div>
                </div>
                <div className='section-outer'>
                    <div className='section-inner'>
                        Type:
                    </div>
                </div>
                <button>submit</button>
            </div>
        );
    }

    toggleSidebar() {
        const width = this.state.isOpen ? '0px' : '256px';
        const toggle = !this.state.isOpen;
        this.sidebar.current.style.width = width;
        this.setState({
            isOpen: toggle
        });
    }
}