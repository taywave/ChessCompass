const form = document.getElementById("checklist-form");
const success = document.getElementById("form-success");

form.addEventListener("submit", (event) => {
  // Temporary front-end behavior.
  // Replace this with your email provider's form endpoint when the backend is ready.
  event.preventDefault();
  success.hidden = false;
  success.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
