export async function getInventory() {
  const response = await fetch("http://localhost:8089/api/get");

  return await response.json();
}

export async function checkInventory() {
  const response = await fetch("http://localhost:8089/api/check");
  return await response.json();
}

export async function sellItems() {
  const response = await fetch("http://localhost:8089/api/sell");
  return await response.json();
}
