const menuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user_drop_menu');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    userMenu.classList.toggle('hidden');
  });

  // Close the dropdown menu when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInside = menuButton.contains(event.target) || userMenu.contains(event.target);
    if (!isClickInside) {
      menuButton.setAttribute('aria-expanded', 'false');
      userMenu.classList.add('hidden');
    }
  });
}



