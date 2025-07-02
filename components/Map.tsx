"use client";
import { Map as MapLibre } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Map() {
  return (
    <MapLibre
      initialViewState={{
        longitude: 35.3188,
        latitude: -15.38596,
        zoom: 3.5,
      }}
      style={{ width: 800, height: 600 }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    />
  );
}
