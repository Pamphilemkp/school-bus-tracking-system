"use client"

// src/app/page.js
import { useEffect, useState } from 'react';
import BusTimetable from './components/BusTimetable';
import BusTracker from './components/BusTracker';
import Map from './components/Map';
import StopInfo from './components/StopInfo';
import { busStops } from './data/busData';

const Page = () => {
  const [studentLocation, setStudentLocation] = useState(null);
  const [busLocations, setBusLocations] = useState([]);

  useEffect(() => {
    // Get the student's current location using browser geolocation API
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setStudentLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting location: ', error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    // Fetch bus locations from the backend
    const fetchBusLocations = async () => {
      const response = await fetch('/api/bus-locations'); // Replace with your actual backend API
      const data = await response.json();
      setBusLocations(data);
    };

    fetchBusLocations();
    const intervalId = setInterval(fetchBusLocations, 30000); // Fetch every 30 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">School Bus Tracker</h1>

      {/* Bus Timetable */}
      <BusTimetable />

      {/* Bus Tracker - shows the nearest bus */}
      {studentLocation && <BusTracker studentLocation={studentLocation} busLocations={busLocations} />}

      {/* Map - shows buses, bus stops, and routes */}
      <div className="my-8">
        <Map busLocations={busLocations} />
      </div>

      {/* Stop Info - shows the nearest bus stop */}
      {studentLocation && <StopInfo studentLocation={studentLocation} busStops={busStops.Nicosia} />}
    </div>
  );
};

export default Page;
