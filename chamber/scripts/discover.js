// discover.js

// ---------- Render cards from JSON ----------
async function loadPlaces() {
  try {
    const response = await fetch("data/places.json");
    const places = await response.json();

    const container = document.querySelector(".cards");
    container.innerHTML = ""; // limpiar antes de insertar

    places.forEach(place => {
      const card = document.createElement("section");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${place.title}</h2>
        <figure>
          <img src="${place.image}" alt="${place.title}" width="300" height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading places.json:", error);
  }
}

// ---------- Visit Message with localStorage ----------
function showVisitMessage() {
  const sidebar = document.querySelector(".sidebar");
  const message = document.createElement("p");

  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const msBetween = now - parseInt(lastVisit, 10);
    const daysBetween = Math.floor(msBetween / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
      message.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      message.textContent = "You last visited 1 day ago.";
    } else {
      message.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
  sidebar.prepend(message);
}

// ---------- Initialize ----------
document.addEventListener("DOMContentLoaded", () => {
  loadPlaces();
  showVisitMessage();
});
