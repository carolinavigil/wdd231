// ui.js - render and modal
export function renderItems(container, items) {
  container.innerHTML = '';
  items.forEach(item => {
    const article = document.createElement('article');
    article.className = 'item-card';
    article.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy" width="400" height="300">
      <h3>${item.title}</h3>
      <p>${item.shortDesc}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      <button class="details-btn" data-id="${item.id}">Ver detalles</button>
    `;
    container.appendChild(article);
  });
}

export function initModal() {
  const modal = document.getElementById('modal');
  const body = modal?.querySelector('.modal-body');
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.details-btn');
    if (btn) {
      const id = btn.dataset.id;
      openModal(id);
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.matches('.modal-close')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function openModal(id) {
    if (!modal) return;
    modal.hidden = false;
    modal.setAttribute('aria-hidden','false');
    body.textContent = 'Cargando...';
    // fetch item from data in window (main.js stores it)
    const item = window.__items?.find(i => i.id === id);
    if (item) {
      body.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p><p><strong>Precio:</strong> ${item.price}</p>`;
    } else {
      body.textContent = 'Detalle no encontrado.';
    }
    // focus close button for accessibility
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden','true');
  }
}

