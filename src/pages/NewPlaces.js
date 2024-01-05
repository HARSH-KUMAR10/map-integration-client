import React from "react";
import Header from "../components/Header";
import ReactMapGL, { Marker, NavigationControl, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function NewPlaces() {
  const mapBoxKey = process.env.REACT_APP_MAPBOX_KEY;
  const mapBoxStyle = process.env.REACT_APP_MAPBOX_STYLE;
  const [viewPort, setViewPort] = React.useState({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 6,
  });
  const [newPlace, setNewPlace] = React.useState(null);
  const mapRef = React.useRef();
  const handleAddClick = (e) => {
    console.log(e, e.lngLat);
    const { lat, lng } = e.lngLat;
    setNewPlace({
      lat: lat,
      long: lng,
    });
  };

  const saveCoordinates = () => {
    if (!newPlace) {
      alert("Select a place.");
      return;
    }
    fetch(`http://localhost:8000/api/v1/coordinate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          process.env.JWT_TOKEN || "USER_TOKEN"
        )}`,
      },
      body: JSON.stringify({ lat: newPlace.lat, lng: newPlace.long }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div style={{ width: "90vw", height: "80vh" }} className="mx-auto py-3">
        <div className="py-2 row justify-content-between align-items-center ">
          <div className="col-5 h3">Adding a new place</div>
          <div className="col-2" style={{ textAlign: "end" }}>
            <button
              style={{
                border: 0,
                backgroundColor: "#2962ff",
                color: "white",
                padding: 10,
              }}
              onClick={saveCoordinates}
            >
              Save place
            </button>
          </div>
        </div>
        <div>
          <ReactMapGL
            ref={mapRef}
            mapboxAccessToken={mapBoxKey}
            initialViewState={viewPort}
            onViewportChange={(viewport) => setViewPort(viewport)}
            mapStyle={mapBoxStyle}
            onDblClick={handleAddClick}
            transitionDuration="200"
            attributionControl={true}
          >
            {newPlace ? (
              <>
                <Marker
                  latitude={newPlace?.lat}
                  longitude={newPlace?.long}
                  offsetLeft={-3.5 * viewPort.zoom}
                  offsetTop={-7 * viewPort.zoom}
                ></Marker>
              </>
            ) : null}
          </ReactMapGL>
        </div>
      </div>
    </div>
  );
}
