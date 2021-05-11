import React from 'react';
import DatePicker from 'react-datepicker';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {SustainQuerier} from "../utils/grpc/grpc_querier";

import 'react-datepicker/dist/react-datepicker.css';

export class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.querier = new SustainQuerier();

        this.state = {
            date: new Date(),
            dropdownOpen: false,
            selector: 'Polygon'
        };
    }

    render() {
        return (
            <div style={{height: '640px',
                width: '256px',
                backgroundColor: 'grey',
                float: 'left',
                color: 'white',
                padding: '10px'}}>

                Date:
                <br/>
                <DatePicker selected={this.state.date} onChange={this.setDate.bind(this)}/>
                <br/>
                Area Selection:
                <br/>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown.bind(this)}>
                    <DropdownToggle caret>
                        {this.state.selector} Selector
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.selectDropdown.bind(this)('Polygon')}>Polygon Selector</DropdownItem>
                        <DropdownItem onClick={() => this.selectDropdown.bind(this)('Radial')}>Radial Selector</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <br/>
                <br/>
                <Button color='primary' onClick={this.runQuery.bind(this)}>Query</Button>
            </div>
        );
    }

    setDate(date) {
        this.setState({
            date: date
        });
    }

    toggleDropdown() {
        const toggle = !this.state.dropdownOpen;
        this.setState({
           dropdownOpen: toggle
        });
    }

    selectDropdown(selector) {
        this.setState({
            selector: selector
        });
    }

    runQuery() {
        const stream = this.querier.getStreamForQuery('dams_geo','');
        stream.on('data', async (data) => console.log(data)); // not getting data back??
        stream.on('end', console.log('end'));
    }
}