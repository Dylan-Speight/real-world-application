import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const MapRender = ({ text }) => <div>{ text }</div>;

const mapStyles = {
    width: '500px',
    height: '500px'
};
class GoogleMapContainer extends Component {
    static defaultProps = {
        center: {lat: -27.4698, lng: 153.0251},
        zoom: 11
    };
render() {
    return (
        <div className="maps-wrapper" style={mapStyles}>
            <div className='formCont'>
                <form>
                    <label>Latitude:
                        <input type="number" name="Latitude" />
                    </label>
                    <label>Longitude:
                        <input type="number" name="Longitude" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: /* replace with env */}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <MapRender
                        lat={-27.4698} 
                        lng={153.0251}
                        text={'Test Map'}
                    />
                </GoogleMapReact>
            </div>            
            )
        }
    }

    export default GoogleMapContainer

