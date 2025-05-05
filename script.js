// script.js
function createEmail() {
  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:CheckmarkAudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.section-box');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});
