// src/app/components/BusTracker.js
import { useState, useEffect } from 'react';
import haversine from 'haversine-distance';

const busColors = {
  Nicosia: 'blue',
  Girne: 'green',
  Famagusta: 'red',
};

const BusTracker = ({ studentLocation, busLocations }) => {
  const [nearestBus, setNearestBus] = useState(null);
  const [distanceToBus, setDistanceToBus] = useState(null);

  useEffect(() => {
    if (studentLocation && busLocations.length > 0) {
      let closestBus = null;
      let minDistance = Infinity;

      busLocations.forEach((bus) => {
        const distance = haversine(
          { lat: studentLocation.lat, lon: studentLocation.lon },
          { lat: bus.location[0], lon: bus.location[1] }
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestBus = bus;
        }
      });

      setNearestBus(closestBus);
      setDistanceToBus(minDistance / 1000); // Convert to km
    }
  }, [studentLocation, busLocations]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Bus Tracker</h2>
      {nearestBus ? (
        <>
          <p style={{ color: busColors[nearestBus.route] }}>Bus: {nearestBus.name}</p>
          <p>Distance from you: {distanceToBus.toFixed(2)} km</p>
        </>
      ) : (
        <p>Fetching bus location...</p>
      )}
    </div>
  );
};

export default BusTracker;
