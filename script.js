// ============= MODERN APPLE WEBSITE JAVASCRIPT =============

// Sidebar Navigation
function open5() {
  document.querySelector('aside').classList.add('active');
  document.querySelector('aside').style.right = "0";
}

function close5() {
  document.querySelector('aside').classList.remove('active');
  document.querySelector('aside').style.right = "-300px";
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.72)';
    navbar.style.boxShadow = 'none';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Shopping cart quantity update
document.querySelectorAll('.qty-input').forEach(input => {
  input.addEventListener('change', function() {
    updateCartTotal();
  });
});

function updateCartTotal() {
  let total = 0;
  document.querySelectorAll('.modern-table tbody tr').forEach(row => {
    const qty = parseInt(row.querySelector('.qty-input').value);
    const price = parseFloat(row.querySelectorAll('td')[3].textContent.replace(/,/g, '').replace(' DH', ''));
    const itemTotal = qty * price;
    row.querySelectorAll('td')[4].textContent = itemTotal.toLocaleString('fr-FR') + ',00 DH';
    total += itemTotal;
  });
  
  const totalCell = document.querySelector('.modern-table tfoot td:nth-child(2)');
  if (totalCell) {
    totalCell.innerHTML = '<strong>' + total.toLocaleString('fr-FR') + ',00 DH</strong>';
  }
}

// Delete button functionality
document.querySelectorAll('.btn-delete').forEach(button => {
  button.addEventListener('click', function() {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
      const row = this.closest('tr');
      row.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => {
        row.remove();
        updateCartTotal();
      }, 300);
    }
  });
});

// Color selection
document.querySelectorAll('.color-dot').forEach(dot => {
  dot.addEventListener('click', function() {
    document.querySelectorAll('.color-dot').forEach(d => {
      d.style.borderColor = 'transparent';
    });
    this.style.borderColor = '#0071e3';
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card, .feature-item, .cart-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Go up button visibility
const goUpButton = document.querySelector('.goup');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    goUpButton.style.opacity = '1';
    goUpButton.style.pointerEvents = 'auto';
  } else {
    goUpButton.style.opacity = '0';
    goUpButton.style.pointerEvents = 'none';
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartTotal();
  
  // Add loading animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
});

console.log('🍎 Modern Apple Website Loaded Successfully!');

