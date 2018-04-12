import React, { Component } from 'react';
import GoogleApiWrapper from '../components/map';

export default class Marketplace extends Component {
    render() {
        return (
            <div className="App">
                <GoogleApiWrapper />
            </div>
        );
    }    

    centerToUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                this.map.setCenter(initialLocation);
            });
        }        
    }
}
