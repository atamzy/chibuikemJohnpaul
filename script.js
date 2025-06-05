document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name'));
    const email = encodeURIComponent(data.get('email'));
    const message = encodeURIComponent(data.get('message'));

    window.location.href =` mailto:attamachibuikem@gmail.com?subject=Message from ${name}&body=${message}%0AFrom:%20${email};`
  });

  const menuIcon = document.getElementById('menuIcon');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });