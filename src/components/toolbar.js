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
                <br/>
                <br/>
                <Button color='success' disabled>Home</Button>
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

    runQuery() { // working, but refine
        const q = [{
            $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: [-105.07, 40.55]
                },
                distanceField: 'dist.calculated',
                maxDistance: 150000
            }
        }];
        const stream = this.querier.getStreamForQuery('fineET_etr',JSON.stringify(q));
        stream.on('data', async (response) => {
            const data = JSON.parse(response.array[0])
            const coordinates = data.geometry.coordinates;
            const etr = data.properties.etr;

            //console.log(`Coordinates: ${coordinates}, ETR: ${etr}`);
            const latlng = {lat: coordinates[1], lng: coordinates[0]};
            this.props.addCircle(latlng, etr);
        });
        stream.on('end', async () => console.log('end'));
    }
}