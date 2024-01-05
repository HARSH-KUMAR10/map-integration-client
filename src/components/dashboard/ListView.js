import React from "react";

export default function ListView({ mapPoints }) {
  return (
    <div className="text-center">
      <div>
        <table border={1}>
          <tr style={{ fontWeight: "bold" }}>
            <td className="p-2">Sr No.</td>
            <td className="p-2">Latitude</td>
            <td className="p-2">Longitude</td>
          </tr>
          {mapPoints.map((points, index) => (
            <tr key={index}>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{points.lat}</td>
              <td className="p-2">{points.lng}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
