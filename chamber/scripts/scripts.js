// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Fetch members
async function loadMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  const container = document.getElementById("members");
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="level">Membership: ${member.membership}</p>
    `;
    container.appendChild(card);
  });
}

// Toggle view
document.getElementById("gridView").addEventListener("click", () => {
  document.getElementById("members").classList.add("grid");
  document.getElementById("members").classList.remove("list");
});

document.getElementById("listView").addEventListener("click", () => {
  document.getElementById("members").classList.add("list");
  document.getElementById("members").classList.remove("grid");
});

loadMembers();
