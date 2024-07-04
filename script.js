document.getElementById('contact-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });
  
  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the default form submission
  
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    let isValid = true;
  
    // Clear previous errors
    document.getElementById('name-error').textContent = '';
    document.getElementById('address-error').textContent = '';
    document.getElementById('phone-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
  
    if (name === "") {
      document.getElementById('name-error').textContent = 'Name is required';
      isValid = false;
    }
  
    if (address === "") {
      document.getElementById('address-error').textContent = 'Address is required';
      isValid = false;
    }
  
    const phoneRegex = /^\+94\d{9}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phone-error').textContent = 'Phone number must start with +94 and be followed by exactly 9 digits';
      isValid = false;
    }
  
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('email-error').textContent = 'Invalid email format';
      isValid = false;
    }
  
    if (message.length < 10) {
      document.getElementById('message-error').textContent = 'Message must be at least 10 characters long';
      isValid = false;
    }
  
    if (isValid) {
      const contactData = { name, address, phone, email, message };
      localStorage.setItem('contactData', JSON.stringify(contactData));
      alert('Form submitted successfully!');
      document.getElementById('modal').style.display = 'none';
      document.getElementById('contact-form').reset();
    }
  });
  