export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Only GET allowed" });
  }

  const response = await fetch("https://workwithus.lucioai.com/access-check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2V5dXIgRyBLdWxrYXJuaSIsImVtYWlsIjoia3Vsa2FybmlrZXl1ci5nQGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTA0LTA4IDE0OjAwOjQ5In0.8cq59mJbRmHvS4L4OF50zggKepn39uYR6wBQ9rrVV2M",
      "Origin": "https://lucioai.com",
      "Referer": "https://lucioai.com/"
    },
    body: JSON.stringify({ name: "mr_robot" })
  });

  const data = await response.json();
  res.status(200).json(data);
}
