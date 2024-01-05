import React from "react";
import Header from "../components/Header";
import ListView from "../components/dashboard/ListView";
import MapView from "../components/dashboard/MapView";

export default function Dashboard() {
  const [mapView, setMapView] = React.useState(false);
  const [mapPoints, setMapPoints] = React.useState([{ lat: " ", lng: " " }]);
  const fetchCoordinates = () => {
    fetch(`http://localhost:8000/api/v1/coordinate`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          process.env.JWT_TOKEN || "USER_TOKEN"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMapPoints(data.data);
          console.log(data.data, mapPoints);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    fetchCoordinates();
  }, []);
  return (
    <div>
      <Header />
      <div className="row justify-content-between align-items-center px-5 py-3">
        <div className="col-5">Saved map points</div>
        <div className="col-2 row">
          <div
            className={`p-2 ${mapView ? "bg-light" : "bg-dark"} ${
              mapView ? "text-dark" : "text-light"
            }`}
            style={{ border: 1 }}
            onClick={() => setMapView(!mapView)}
          >
            <i class="material-icons" style={{ fontSize: "26px" }}>
              filter_list
            </i>
          </div>
          <div
            className={`p-2 ${!mapView ? "bg-light" : "bg-dark"} ${
              !mapView ? "text-dark" : "text-light"
            }`}
            style={{ border: 1 }}
            onClick={() => setMapView(!mapView)}
          >
            <i class="material-icons" style={{ fontSize: "26px" }}>
              add_location
            </i>
          </div>
        </div>
      </div>
      <div className="px-5">
        {!mapView ? (
          <ListView mapPoints={mapPoints} />
        ) : (
          <MapView mapPoints={mapPoints} />
        )}
      </div>
    </div>
  );
}
