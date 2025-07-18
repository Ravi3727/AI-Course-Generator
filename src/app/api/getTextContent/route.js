
export async function GET() {
  return new Response("Fetching data", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}