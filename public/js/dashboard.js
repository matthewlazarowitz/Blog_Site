function handleLogout() {
  // Remove the image_url session key from sessionStorage
  sessionStorage.removeItem('image_url');

  // Perform any other logout-related tasks if needed
  // ...

  // Redirect the user to the logout page or any other desired page
  window.location.href = '/logout'; // Change '/logout' to the appropriate logout URL
}

// Add event listener to the logout button or link
const logoutButton = document.getElementById('logoutButton'); // Replace 'logoutButton' with the actual ID of your logout button or link
logoutButton.addEventListener('click', handleLogout);


