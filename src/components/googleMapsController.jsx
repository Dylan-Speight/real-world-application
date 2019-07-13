import React, { Component } from 'react'
import GoogleMapReact, { Marker, map, maps } from 'google-map-react'


export default class GoogleMapsController {
 mapsRender(properties) {
    return (
        <div className="mapsclass">
    <GoogleMapReact
                        bootstrapURLKeys={{ key:process.env.REACT_APP_MAPS_APIKEY }}
                        yesIWantToUseGoogleMapApiInternals
                        center={{lat: properties[0].listing.propertyDetails.latitude, lng:properties[0].listing.propertyDetails.longitude}}
                        zoom={11}
                        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps, properties)}
                        >
                    </GoogleMapReact></div>)
}
 renderMarkers(map, maps, properties){

    properties.map((newMarker, index) => {
        let marker = new maps.Marker({
            position: {lat: newMarker.listing.propertyDetails.latitude, lng: newMarker.listing.propertyDetails.longitude},
            map,
            title: 'Hello World!',
            window: 0
        })
    
        let content = `<div class="propertyInfo">`+
        `<p class="propertyAddress">${newMarker.listing.propertyDetails.displayableAddress + " " + newMarker.listing.propertyDetails.postcode}</p>`+
        `<div class="propertyPrice">${newMarker.listing.priceDetails.displayPrice}</div>`+
        `<div class="propertyImage">` + 
        `<img src="${newMarker.listing.media[0].url}"/>`+
        `</div>`+
        `</div>`

        let infowindow = new maps.InfoWindow({
            content: content
        })
        marker.addListener('click', function() {
            if (marker.window === 0) {
            infowindow.open(map, marker)
            marker.window = 1
           }
            else {
                infowindow.close(map, marker)
                marker.window = 0
            }
        });
      
})
}
}