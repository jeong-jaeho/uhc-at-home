export async function GET(request) {
  const users = [
    { id: 1, name: "Jaeho" },
    { id: 2, name: "Nat" },
  ];

  return new Response(JSON.stringify(users));
}
