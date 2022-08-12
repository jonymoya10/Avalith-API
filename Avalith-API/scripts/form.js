const form = document.getElementById("form");
const d = document;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(
    new FontData(e.target)
  )
}) 