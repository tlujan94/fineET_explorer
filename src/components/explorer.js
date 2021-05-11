import React from 'react';
import L from 'leaflet';

export class Explorer extends React.Component {
    render() {
        return (
            <div id='explorer' style={{height: '640px', width: '768px'}}/>
        );
    }

    // MAKE SURE TO GET USER LOCATION
    componentDidMount() {
        this.explorer = L.map('explorer', {
           center: [37.8, -96],
           zoom: 4
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.explorer);
    }
}