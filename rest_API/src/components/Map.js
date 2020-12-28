// import React from 'react';
// import {Component} from 'react';
//
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';
// import styled from 'styled-components';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//
// const Wrapper = styled.div`
// width: ${props => props.width};
// height:${props => props.height};`;
//
// export default class Map extends Component {
//
//     componentDidMount() {
//
//         this.map = L.map('map').setView([-41.2858, 174.78682], 14);
//         let DefaultIcon = L.icon({
//             iconUrl: icon,
//             shadowUrl: iconShadow
//         });
//
//         L.Marker.prototype.options.icon = DefaultIcon;
//         L.marker([-41.29042, 174.78219])
//             .addTo(this.map);
//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//             detectRetina: true,
//             maxZoom: 20,
//             maxNativeZoom: 17,
//         }).addTo(this.map)
//     }
//     render() {
//
//         return <Wrapper width={"600px"} height={'300px'} id ='map'/>
//     }
// }
import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
let DefaultIcon = L.icon({
    ...L.Icon.Default.prototype.options,
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
    return(
        <MapContainer center={props.position} style={{width: '600px',height: '300px'}} zoom={14} maxZoom={20} maxNativeZoom={17}
                      detectRetina ={true}
            // center={props.position}
            // zoom={4}
            scrollWheelZoom={false}
            id="map"
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <Marker position={props.position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;