"use client"; // Ensures that this component is only rendered on the client side

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { busStops } from '../data/busData';
import L from 'leaflet';

const Map = ({ busRoutes }) => {
  const busRouteColors = {
    Nicosia: 'blue',
    Girne: 'green',
    Famagusta: 'red',
  };

  return (
    <MapContainer center={[35.1708, 33.3668]} zoom={12} className="h-96">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Object.entries(busStops).map(([city, stops]) => {
        if (typeof stops === 'object') {
          return Object.entries(stops).map(([subDestination, stopsArray]) => {
            if (Array.isArray(stopsArray)) {
              return stopsArray.map((stop, index) => (
                <Marker
                  key={index}
                  position={stop.location}
                  icon={L.divIcon({
                    className: 'marker',
                    html: `<div style="color: ${busRouteColors[city]};">${index + 1} (${subDestination})</div>`,
                  })}
                >
                  <Popup>{`${stop.name} - ${subDestination}`}</Popup>
                </Marker>
              ));
            }
            return null;
          });
        }
        return null;
      })}
      {Array.isArray(busRoutes) && busRoutes.length > 0 ? (
        busRoutes.map((route, index) => (
          <Polyline key={index} positions={route.path} color={busRouteColors[route.city]} />
        ))
      ) : (
        <p>No routes available</p>
      )}
    </MapContainer>
  );
};

export default Map;
