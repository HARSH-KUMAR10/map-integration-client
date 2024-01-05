import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapView({ mapPoints }) {
  const mapRef = React.useRef();
  const mapBoxKey = process.env.REACT_APP_MAPBOX_KEY;
  const mapBoxStyle = process.env.REACT_APP_MAPBOX_STYLE;
  const [viewPort, setViewPort] = React.useState({
    latitude: mapPoints[0].lat,
    longitude: mapPoints[0].lng,
    zoom: 3,
  });
  return (
    <div>
      <div style={{ width: "90vw", height: "75vh" }} className="mx-auto py-1">
        <ReactMapGL
          ref={mapRef}
          mapboxAccessToken={mapBoxKey}
          initialViewState={viewPort}
          onViewportChange={(viewport) => setViewPort(viewport)}
          mapStyle={mapBoxStyle}
          attributionControl={true}
        >
          {mapPoints.map((point, index) => (
            <Marker
              latitude={point?.lat}
              longitude={point?.lng}
              offsetLeft={-3.5 * viewPort.zoom}
              offsetTop={-7 * viewPort.zoom}
            ></Marker>
          ))}
        </ReactMapGL>
      </div>
    </div>
  );
}
