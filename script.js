
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the select element, the "Search" button, and the result divs
  const selectElement = document.getElementById("product-name");
  const searchButton = document.getElementById("submit");
  const div1 = document.querySelector(".div1");
  const div2 = document.querySelector(".div2");
  const div3 = document.querySelector(".div3");
  const div4 = document.querySelector(".div4");

  // Add an event listener to the "Search" button
  searchButton.addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the selected option
    const selectedOption = selectElement.value;

    // Hide all divs initially
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";

    // Show the corresponding div based on the selected option
    if (selectedOption === "shirt for men") {
      div1.style.display = "flex";
    } else if (selectedOption === "dress for women") {
      div2.style.display = "flex";
    } else if (selectedOption === "smart watch") {
      div3.style.display = "flex";
    } else if (selectedOption === "water bottle") { // Change "shoes" to "water bottle"
      div4.style.display = "flex";
    }
  });
});