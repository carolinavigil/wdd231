// data-service.js
export async function fetchItems(url = 'data/items.json') {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.items || data;
  } catch (err) {
    console.error('Fetch error', err);
    throw err;
  }
}

