// Set current timestamp in hidden field
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();

  // Year & last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Open modals
  document.querySelectorAll("[data-modal]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = e.target.getAttribute("data-modal");
      document.getElementById(modalId).showModal();
    });
  });
});
