document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const submittedData = document.getElementById("submittedData");

  const fields = ["first", "last", "email", "phone", "organization", "timestamp"];

  fields.forEach(field => {
    if (params.has(field)) {
      const li = document.createElement("li");
      li.textContent = `${field}: ${params.get(field)}`;
      submittedData.appendChild(li);
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
