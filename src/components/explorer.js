import React from 'react';
import L from 'leaflet';
import { geoLocation } from "../utils/geoLocation";
import {colorForPercentage} from "../utils/colors";

export class Explorer extends React.Component {
    constructor(props) {
        super(props);

        this.addCircle = this.addCircle.bind(this);
    }

    render() {
        return (
            <div id='explorer' style={{height: '640px', width: '768px'}}/>
        );
    }

    // MAKE SURE TO GET USER LOCATION
    componentDidMount() {
        this.explorer = L.map('explorer', {
            center: [37.8, -96],
            zoom: 4,
            zoomControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.explorer);
        new L.Control.Zoom({position: 'topright'}).addTo(this.explorer);

        geoLocation(this.setUserLocation.bind(this));
    }

    setUserLocation(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.explorer.setView(new L.latLng(lat, lng), 8);
    }

    addCircle(latlng, etr) {
        const circle = new L.circle(latlng, {
            color: colorForPercentage(etr / 5),
            radius: 1750,
            stroke: false
        }).bindPopup('etr: ' + etr.toFixed(2)).on('mouseover', () => {
            circle.openPopup();
        }).on('mouseout', () => {
            circle.closePopup();
        }).addTo(this.explorer);
    }
}