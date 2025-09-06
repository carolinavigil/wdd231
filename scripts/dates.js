const yearOut = document.getElementById('copyright');
const lastModOut = document.getElementById('lastModified');
const now = new Date();


yearOut.textContent = `© ${now.getFullYear()}`;
lastModOut.textContent = `Last Modified: ${document.lastModified}`;