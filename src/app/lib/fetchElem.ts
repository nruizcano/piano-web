export async function fetchElem(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(`Failed to fetch: ${response.status}, ${data.error}`);
  }

  return data;
}