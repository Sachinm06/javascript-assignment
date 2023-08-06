
// ----------------------------------next button-------------------------------------

let currentIndex = 0;
const images = document.getElementsByClassName("slideshow-image");

function showNextImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
}

images[currentIndex].style.display = "block";


// ---------------------------------dropdown----------------------------------------

function loadHomePage() {
    var dropdown = document.getElementById("websiteDropdown");
    var selectedValue = dropdown.value;
    var selectedText = dropdown.options[dropdown.selectedIndex].text;
    var visitButton = document.getElementById("visitButton");
    if (selectedValue !== "") {
        visitButton.disabled = false;
        visitButton.textContent = "Try it";
        visitButton.onclick = function () {
            window.open(selectedValue, "_blank");
        };
    }
}


//   --------------------------------------list boxes------------------------------------

function add() {
    const list1 = document.getElementById("list1");
    const list2 = document.getElementById("list2");

    const selectedOptions = Array.from(list1.selectedOptions);

    selectedOptions.forEach((option) => {
      list2.appendChild(option);
    });
  }

  function addAll() {
    const list1 = document.getElementById("list1");
    const list2 = document.getElementById("list2");

    while (list1.options.length > 0) {
      list2.appendChild(list1.options[0]);
    }
  }

  function addMultiple() {
    const list1 = document.getElementById("list1");
    const list2 = document.getElementById("list2");

    const selectedOptions = Array.from(list1.selectedOptions);

    selectedOptions.forEach((option) => {
      list2.appendChild(option);
    });
  }

// ----------------------------------form validation------------------------------------

function validateForm() {
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
  
    // Validation checks
    if (!isValidName(firstNameInput.value)) {
      alert("Please enter a valid first name (only alphabets allowed).");
      return false;
    }
  
    if (!isValidName(lastNameInput.value)) {
      alert("Please enter a valid last name (only alphabets allowed).");
      return false;
    }
  
    if (!isValidPhone(phoneInput.value)) {
      alert("Please enter a valid phone number (10-digit numeric value only).");
      return false;
    }
  
    if (!isValidEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    return true;
  }
  
  function isValidName(name) {
    return /^[A-Za-z]+$/.test(name);
  }
  
  function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  

