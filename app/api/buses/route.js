import clientPromise from '../../../lib/mongodb';

export const GET = async (req) => {
  const client = await clientPromise;
  const db = client.db('school-bus-tracking');

  try {
    const buses = await db.collection('buses').find({}).toArray();
    return new Response(JSON.stringify(buses), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch buses' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
