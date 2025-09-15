async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const eligible = data.members.filter(m =>
      m.membershipLevel === "Gold" || m.membershipLevel === "Silver"
    );

    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("article");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a>
        <p class="level ${member.membershipLevel.toLowerCase()}">${member.membershipLevel} Member</p>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error loading spotlights:", err);
  }
}

loadSpotlights();
