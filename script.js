  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
  });

  window.onclick = function(event) {
    if (!event.target.matches(".dropdown")) {
      dropdownContent.classList.remove("show");
    }
  };