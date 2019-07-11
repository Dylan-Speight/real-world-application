import React, { Component } from 'react'
import { Marker, map, maps } from 'google-map-react'
// const google = window.google;

// import GoogleMapContainer from './googlemaps'
// export class Markers extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             markers: []
//         }
//         // let myLatLng = {lat: -27, lng: 153}
 
//     }
    
//     // getMarkers = (props = this.props) => {
//     //     let practices = props.doctors.map(function(doctor, index) {
//     //         return {
//     //             title: doctor.profile.first_name + ' ' + doctor.profile.last_name,
//     //             location: {
//     //                 lat: doctor.practices[0].visit_address.lat,
//     //                 lng: doctor.practices[0].visit_address.lon
//     //             }
//     //         }
//     //     });
//     //     this.setState({ markers: practices, isMarkerShown: true });
//     // }
//     renderMarkers(map, maps) {
//         let marker = new maps.Marker({
//             position: {lat: this.props.lat, lng: this.props.lng},
//             map,
//             title: 'Hello World!'
//         });
//     }
   
//     // render() {
//     //     return (
//     //         <span>{this.state.markers}</span>

//     //     )
//     // }
// }

export function renderMarkers(map, maps, test) {
console.log(test)
    let marker = new maps.Marker({
        position: test,
        map,
        title: 'Hello World!'
    });
    // console.log(marker)
}