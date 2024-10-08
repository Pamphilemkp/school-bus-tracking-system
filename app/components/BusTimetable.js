// src/app/components/BusTimetable.js
import React from 'react';

// Example bus schedule data
const timetableData = {
  'Bus 1': {
    destination: 'Yenikent',
    departures: [
      { time: '06:30', estimatedArrival: '07:15' },
      { time: '08:00', estimatedArrival: '08:45' },
      { time: '09:30', estimatedArrival: '10:15' },
      { time: '11:00', estimatedArrival: '11:45' },
      { time: '12:30', estimatedArrival: '13:15' },
      { time: '14:00', estimatedArrival: '14:45' },
      { time: '15:30', estimatedArrival: '16:15' },
      { time: '17:00', estimatedArrival: '17:45' },
      { time: '18:30', estimatedArrival: '19:15' },
      { time: '20:00', estimatedArrival: '20:45' },
    ],
  },
  'Bus 2': {
    destination: 'Hamitkoy',
    departures: [
      { time: '06:30', estimatedArrival: '07:15' },
      { time: '08:00', estimatedArrival: '08:45' },
      { time: '09:30', estimatedArrival: '10:15' },
      { time: '11:00', estimatedArrival: '11:45' },
      { time: '12:30', estimatedArrival: '13:15' },
      { time: '14:00', estimatedArrival: '14:45' },
      { time: '15:30', estimatedArrival: '16:15' },
      { time: '17:00', estimatedArrival: '17:45' },
      { time: '18:30', estimatedArrival: '19:15' },
      { time: '20:00', estimatedArrival: '20:45' },
    ],
  },
  'Bus 3': {
    destination: 'Gonyeli',
    departures: [
      { time: '06:30', estimatedArrival: '07:15' },
      { time: '08:00', estimatedArrival: '08:45' },
      { time: '09:30', estimatedArrival: '10:15' },
      { time: '11:00', estimatedArrival: '11:45' },
      { time: '12:30', estimatedArrival: '13:15' },
      { time: '14:00', estimatedArrival: '14:45' },
      { time: '15:30', estimatedArrival: '16:15' },
      { time: '17:00', estimatedArrival: '17:45' },
      { time: '18:30', estimatedArrival: '19:15' },
      { time: '20:00', estimatedArrival: '20:45' },
    ],
  },
  'Bus 4': {
    destination: 'Girne',
    departures: [
      { time: '06:30', estimatedArrival: '07:15' },
      { time: '08:00', estimatedArrival: '08:45' },
      { time: '09:30', estimatedArrival: '10:15' },
      { time: '11:00', estimatedArrival: '11:45' },
      { time: '12:30', estimatedArrival: '13:15' },
      { time: '14:00', estimatedArrival: '14:45' },
      { time: '15:30', estimatedArrival: '16:15' },
      { time: '17:00', estimatedArrival: '17:45' },
      { time: '18:30', estimatedArrival: '19:15' },
      { time: '20:00', estimatedArrival: '20:45' },
    ],
  },
  'Bus 5': {
    destination: 'Famagusta',
    departures: [
      { time: '06:30', estimatedArrival: '07:15' },
      { time: '08:00', estimatedArrival: '08:45' },
      { time: '09:30', estimatedArrival: '10:15' },
      { time: '11:00', estimatedArrival: '11:45' },
      { time: '12:30', estimatedArrival: '13:15' },
      { time: '14:00', estimatedArrival: '14:45' },
      { time: '15:30', estimatedArrival: '16:15' },
      { time: '17:00', estimatedArrival: '17:45' },
      { time: '18:30', estimatedArrival: '19:15' },
      { time: '20:00', estimatedArrival: '20:45' },
    ],
  },
};

const BusTimetable = () => {
  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Bus Timetable</h2>
      {Object.entries(timetableData).map(([bus, { destination, departures }]) => (
        <div key={bus} className="mb-2">
          <h3 className="font-semibold">{bus} to {destination}</h3>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Departure</th>
                <th className="border border-gray-300 px-4 py-2">Estimated Arrival</th>
              </tr>
            </thead>
            <tbody>
              {departures.map((departure, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{departure.time}</td>
                  <td className="border border-gray-300 px-4 py-2">{departure.estimatedArrival}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default BusTimetable;
