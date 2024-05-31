import React, { useLayoutEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";

/* Defines the image, styles and size of the markers who have their data displayed*/
const icon = L.icon({
  iconUrl: "./images/house.svg",
  className: "bg-green rounded-5 border border-light",
  iconSize: [30, 30],
});

//Default OSM URL for Tiles: https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

/* Data variables */
const center = [43.53375904751804, -6.51351570693712];
const zoom = 13;

/* Element map */
export default function Map() {
  /* Map reference, so the handler has access and work with it */
  const mapRef = useRef(null);

  /* Map handler, takes you back to the original position */
  const handlePos = () => {
    if (mapRef.current) {
      /* Sets the view of the actual map to default when the button is clicked */
      mapRef.current.setView(center, zoom);
    }
  };

  return (
    /* Contains the elements of the map, defines its style, the zoom and the center of the display in LatLong */

    <MapContainer
      ref={mapRef}
      style={{
        width: "640px",
        height: "480px",
        display: "block",
        margin: "auto",
        position: "topright",
      }}
      center={center}
      zoom={zoom}
      id="map"
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Satélite">
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
            attribution='&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            ext="jpg"
          />{" "}
          {/* Important to specify the attributions, no copyright problems are wanted */}
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Carreteras">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Topográfico">
          <TileLayer
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          />
        </LayersControl.BaseLayer>

        {/* Add more tiles when needed */}
      </LayersControl>

      <Marker
        position={[43.53375904751804, -6.51351570693712]}
        icon= {icon}
    >
      <Tooltip>
         ¡Este es nuestro centro!
        <br />
        <img
          style={{ height: "10rem", width: "15rem", textAlign: "center" }}
          alt="Centro deportivo"
          src="./images/centro.png"
        />
      </Tooltip>
      </Marker>

      {/* Button that resets the zoom and center to default */}
      <button
        onClick={handlePos}
        style={{
          position: "absolute",
          top: 77,
          left: 11,
          zIndex: 1000,
          height: "2rem",
          width: "2rem",
          backgroundColor: "white",
          padding: 5,
          borderRadius: 5,
          borderColor: "lightgray",
          cursor: "pointer",
        }}
      >
        <img
          src="./images/house.svg"
          alt="house icon"
          style={{ width: "1rem", height: "1rem" }}
        ></img>
      </button>
    </MapContainer>
  );
}
