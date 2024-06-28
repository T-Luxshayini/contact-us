document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("contactUsBtn");
  const span = document.getElementsByClassName("close")[0];
  const form = document.getElementById("contactForm");

  btn.onclick = function() {
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  form.addEventListener('submit', function(event) {
      event.preventDefault();

     
      let isValid = true;

      const name = document.getElementById("name").value.trim();
      const address = document.getElementById("address").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const phoneRegex = /^\+94\d{9}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      
      document.getElementById("nameError").textContent = "";
      document.getElementById("addressError").textContent = "";
      document.getElementById("phoneError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("messageError").textContent = "";

      if (name === "") {
          document.getElementById("nameError").textContent = "Name is required";
          isValid = false;
      }

      if (address === "") {
          document.getElementById("addressError").textContent = "Address is required";
          isValid = false;
      }

      if (!phoneRegex.test(phone)) {
          document.getElementById("phoneError").textContent = "Invalid phone number. It should start with +94 and be followed by exactly 9 digits.";
          isValid = false;
      }

      if (!emailRegex.test(email)) {
          document.getElementById("emailError").textContent = "Invalid email format.";
          isValid = false;
      }

      if (message.length < 10) {
          document.getElementById("messageError").textContent = "Message should be at least 10 characters long.";
          isValid = false;
      }

      if (isValid) {
         
          const contactData = {
              name: name,
              address: address,
              phone: phone,
              email: email,
              message: message
          };
          localStorage.setItem('contactData', JSON.stringify(contactData));

          alert("Contact data submitted successfully!");
          modal.style.display = "none";
      }
  });
});
