// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Make filter buttons active
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Booking form
  document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const dest = document.getElementById('modal-destination').value || "your trip";
    alert(`🎉 Booking confirmed for ${dest}!\nWe'll contact you shortly.`);
    closeModal();
  });
});

function filterDestinations(category) {
  const cards = document.querySelectorAll('.destination-card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.getAttribute('data-category') === category ? 'block' : 'none';
    }
  });
}

function filterFromHero() {
  const term = document.getElementById('hero-search').value.toLowerCase().trim();
  if (!term) return;

  const cards = document.querySelectorAll('.destination-card');
  let found = false;

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(term)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (found) {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("No matching destination at the moment. Please try Paris, Ghana, Egypt, etc.");
  }
}

function bookDestination(btn) {
  const card = btn.closest('.destination-card');
  const name = card.querySelector('h3').textContent;
  document.getElementById('modal-destination').value = name;
  showBookingModal();
}

function showBookingModal() {
  document.getElementById('booking-modal').classList.remove('hidden');
  document.getElementById('booking-modal').classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('booking-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}