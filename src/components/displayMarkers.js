// import React, { Component } from 'react'
// import GoogleMapReact, { map, maps } from 'google-map-react'


// export class DisplayMarkers extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
//               {latitude: 47.359423, longitude: -122.021071},
//               {latitude: 47.2052192687988, longitude: -121.988426208496},
//               {latitude: 47.6307081, longitude: -122.1434325},
//               {latitude: 47.3084488, longitude: -122.2140121},
//               {latitude: 47.5524695, longitude: -122.0425407}]
//     }
//   }

//   displayMarkers = () => {
//     return this.state.stores.map((store, index) => {
//       return <Marker key={index} id={index} position={{
//        lat: store.latitude,
//        lng: store.longitude
//      }}
//      onClick={() => console.log("You clicked me!")} />
//     })
//   }

//   render() {
//     return (
//       <GoogleMapReact
//       bootstrapURLKeys={{ key:"AIzaSyCgZJe4oyVbeucoA2e2RvWAK9P8IQgG1Dk" }}
//       defaultCenter={this.props.center}
//       defaultZoom={this.props.zoom}
//       center={{lat: this.props.lat, lng: this.props.lng}}
//       yesIWantToUseGoogleMapApiInternals={true}
//       onGoogleApiLoaded={({map, maps}) => this.displayMarkers(map, maps)}
//       >
//       <MapRender
//       />
//   </GoogleMapReact>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCgZJe4oyVbeucoA2e2RvWAK9P8IQgG1Dk"
// })(MapContainer);