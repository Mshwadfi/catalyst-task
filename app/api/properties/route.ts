/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(req: { url: string | URL; }) {
    try {
      // Fetch data from the external API
      const response = await fetch('https://test.catalystegy.com/public/api/properties');
      const data = await response.json();
  
      console.log("Fetched Data:", data); // Log the raw data here to inspect the structure
  
  
      // Extract pagination parameters from the query string
      const { searchParams } = new URL(req.url);
      const page = parseInt(searchParams.get('page')) || 1;
      const limit = parseInt(searchParams.get('limit')) || 10;
  
      // Calculate start and end indices for pagination
      const startIdx = (page - 1) * limit;
      const endIdx = startIdx + limit;
  
      // Paginate the data
      const paginatedData = data.slice(startIdx, endIdx);
  
      return new Response(JSON.stringify({ total: data.length, page, limit, data: paginatedData }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch properties' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  