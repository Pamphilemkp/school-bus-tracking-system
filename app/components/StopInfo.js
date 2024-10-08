// src/app/components/StopInfo.js
import React from 'react';

const calculateDistance = (location1, location2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (location2[0] - location1[0]) * (Math.PI / 180);
  const dLon = (location2[1] - location1[1]) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(location1[0] * (Math.PI / 180)) * Math.cos(location2[0] * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const StopInfo = ({ studentLocation, busStops }) => {
  if (!Array.isArray(busStops) || busStops.length === 0) {
    return <div>No bus stops available.</div>;
  }

  const nearestStop = busStops.reduce((closest, stop) => {
    const distance = calculateDistance(studentLocation, stop.location);
    return distance < closest.distance ? { stop, distance } : closest;
  }, { stop: null, distance: Infinity });

  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Nearest Bus Stop</h2>
      {nearestStop.stop ? (
        <p>
          {nearestStop.stop.name} is {nearestStop.distance.toFixed(2)} km away.
        </p>
      ) : (
        <p>No bus stops available.</p>
      )}
    </div>
  );
};

export default StopInfo;
