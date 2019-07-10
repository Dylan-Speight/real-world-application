import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
const google = window.google;

const MapRender = ({ text }) => <div>{ text }</div>;
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
const mapStyles = {
    width: '500px',
    height: '500px'
};
class GoogleMapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lng: ""
        }
    // let myLatLng = {lat: -27, lng: 153}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    static defaultProps = {
        zoom: 11,
        lat: -27,
        lng: 153
    };
    

    handleChange(event) {
        console.log(this.state)
        console.log(event.target.name); // the name of the form element
        console.log(event.target.value); // the value of the form element

        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log(event.target.name);
        event.preventDefault();
        this.renderMarkers();
        
      }
   renderMarkers(map, maps) {
    let marker = new maps.Marker({
        position: {lat: this.props.lat, lng: this.props.lng},
        map,
        title: 'Hello World!'
    });
    }
    render() {
        return (
            <div className="maps-wrapper" style={mapStyles}>
                <div id="floating-panel">
                    <input id="address" type="textbox" defaultValue="Sydney, NSW" />
                    <input id="submit" type="button" defaultValue="Geocode" />
                </div>                
                <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFEQyn3F9EYa1GoQUyvEJbnD-4KQjkwLM&callback=initMap"></script>
                <div className='formCont'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Latitude:
                        <input type="number" defaultValue={this.props.lat} name="lat" onChange={this.handleChange} />

                        </label>
                        {/* <label>Longitude:
                        <input type="number" defaultValue={this.props.lng} name="lng" onChange={this.handleChange} />
                        </label> */}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                    <GoogleMapReact

                        bootstrapURLKeys={{ key:"AIzaSyCgZJe4oyVbeucoA2e2RvWAK9P8IQgG1Dk" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        center={{lat: this.props.lat, lng: this.props.lng}}
                        
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                        >
                        <MapRender
                            lat={this.props.lat} 
                            lng={this.props.lng}
                            text={'Test Map'}
                        />
                    </GoogleMapReact>
                </div>  
        )
    }
}

    export default GoogleMapContainer
