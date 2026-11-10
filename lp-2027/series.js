document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!button || !drawer || !overlay) return;
  const close = () => {
    button.classList.remove('is-open'); drawer.classList.remove('is-open'); overlay.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };
  button.addEventListener('click', () => {
    const open = !drawer.classList.contains('is-open');
    button.classList.toggle('is-open', open); drawer.classList.toggle('is-open', open); overlay.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  });
  overlay.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
});
