// main.js - bootstrap page behaviors
import { fetchItems } from './data-service.js';
import { renderItems, initModal } from './ui.js';
import './nav.js';

document.addEventListener('DOMContentLoaded', async () => {
  // year
  document.getElementById('year')?.textContent = new Date().getFullYear();

  // items page behavior
  const container = document.getElementById('items-container');
  if (container) {
    try {
      const items = await fetchItems();
      // keep global for modal lookup
      window.__items = items;
      // ensure at least 15 items
      if (items.length < 15) {
        container.innerHTML = '<p class="error">No hay suficientes ítems en el JSON (se esperan 15+).</p>';
      } else {
        renderItems(container, items.slice(0,50));
      }
      initModal();

      // filter feature
      const filterInput = document.getElementById('filter-input');
      filterInput?.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        const filtered = items.filter(i => i.title.toLowerCase().includes(q));
        renderItems(container, filtered.slice(0,50));
      });

      // view preference using localStorage
      const select = document.getElementById('view-toggle');
      const saved = localStorage.getItem('preferredView') || 'grid';
      document.body.dataset.view = saved;
      if (select) select.value = saved;
      select?.addEventListener('change', (e) => {
        localStorage.setItem('preferredView', e.target.value);
        document.body.dataset.view = e.target.value;
      });

    } catch (err) {
      container.innerHTML = '<p class="error">Error cargando datos. Intenta recargar la página.</p>';
    }
  }

  // focus main for skip link
  const main = document.getElementById('main');
  if (main) main.focus();
});
