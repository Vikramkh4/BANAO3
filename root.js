function submitForm() {
  const button = document.querySelector(".button");

  // Create and append a loader element
  const loader = document.createElement("div");
  loader.classList.add("loader");

  // Append the loader before the loading text
  button.textContent = "";
  button.appendChild(loader);
  button.insertAdjacentHTML("beforeend", " Loading");

  // Disable the button
  button.disabled = true;

  // Simulate loading for 2 seconds
  setTimeout(() => {
    // Enable the button
    button.disabled = false;

    // Remove the loader element and restore the original text
    button.removeChild(loader);
    button.textContent = "Submit";
  }, 2000);
}
