// app/api/bus-locations/route.js

export async function GET(request) {
    // Example dynamic bus locations (replace with actual logic)
    const busLocations = [
      { id: 1, name: 'Bus 1', location: [35.1908, 33.3818] },
      { id: 2, name: 'Bus 2', location: [35.1608, 33.3508] },
      { id: 3, name: 'Bus 3', location: [35.1708, 33.3608] },
    ];
  
    return new Response(JSON.stringify(busLocations), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  