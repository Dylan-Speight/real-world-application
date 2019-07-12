import React, { Component } from 'react'
import GoogleMapReact, { Marker, map, maps } from 'google-map-react'
import { renderMarkers } from './markers'
const google = window.google;

const MapRender = ({ text }) => <div>{ text }</div>;

const mapStyles = {
    width: '500px',
    height: '500px'
}

class GoogleMapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lng: "",
            markers: [{latitude: -27, longitude: 153},{latitude: 100, longitude: 30}, {latitude: 39, longitude: 2}]

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log(props)

    }
    
    static defaultProps = {
        zoom: 11,
        lat: -27,
        lng: 153
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault(); 
        // this.testMarkers();
    }

    // displayMarkers = () => {
    //     return this.state.markers.map((store, index) => {
    //         console.log(store)
    //       return <Marker key={index} id={index} position={{
    //        lat: store.latitude,
    //        lng: store.longitude
    //      }}
    //      onClick={() => console.log("You clicked me!")} />
    //     })
    //   }
    //   renderMarkers(map, maps) {
    //     let marker = new maps.Marker({
    //         position: {lat: this.props.lat, lng: this.props.lng},
    //         map,
    //         title: 'Hello World!'
    //     });
    //     }
    renderMarkers(map, maps){
        // console.log(GenerateToken.props)
        this.state.markers.map((newMarker, index) => {
            let marker = new maps.Marker({
                position: {lat: newMarker.latitude, lng: newMarker.longitude},
                map,
                title: 'Hello World!'
            });
    })
}
mapsTest() {
    // console.log(this.state)
       console.log('mapstest this far')
       return (<GoogleMapContainer {...this.state}/>)
    // )

}
    render() {
        return (
            <div className="maps-wrapper" style={mapStyles}>
                <div id="floating-panel">
                    <input id="address" type="textbox" defaultValue="Sydney, NSW" />
                    <input id="submit" type="button" defaultValue="Geocode" />
                </div>                
                {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_APIKEY}&callback=initMap"></script> */}
                <div className='formCont'>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Latitude:</label>
                        <input type="number" defaultValue={this.props.lat} name="lat" onChange={this.handleChange} />
                        <label>Longitude:</label>
                        <input type="number" defaultValue={this.props.lng} name="lng" onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:process.env.REACT_APP_MAPS_APIKEY }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        center={{lat: this.props.lat, lng: this.props.lng}}
                        yesIWantToUseGoogleMapApiInternals
                        // onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                        >
                                      {/* {this.displayMarkers()} */}

                         {/* <MapRender /> */}
                        
                    </GoogleMapReact>
                    </div>
        )
    }
}

    export default GoogleMapContainer
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 8,
//       center: {lat: -34.397, lng: 150.644}
//     });
//     var geocoder = new google.maps.Geocoder();

//     document.getElementById('submit').addEventListener('click', function() {
//       geocodeAddress(geocoder, map);
//     });
//   }

//   function geocodeAddress(geocoder, resultsMap) {
//     var address = document.getElementById('address').value;
//     geocoder.geocode({'address': address}, function(results, status) {
//       if (status === 'OK') {
//         resultsMap.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//           map: resultsMap,
//           position: results[0].geometry.location
//         });
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }