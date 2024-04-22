// import { tileLayer } from "leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function maps() {
  return (
    <MapContainer center ={[6.1813, 35.7358]} zoom={13}>
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/#map=13/-6.1813/35.7358'>OpenStreetMap</a> contributors"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default maps;
