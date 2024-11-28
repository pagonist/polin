const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

document.addEventListener("DOMContentLoaded", function() {
  let lastScrollTop = 0;
  const sections = document.querySelectorAll('.features__section');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          const section = entry.target;
          const isScrollingDown = window.scrollY > lastScrollTop;

          if (entry.isIntersecting && isScrollingDown) {
              section.classList.add('visible');
          }

          if (entry.isIntersecting && !isScrollingDown) {
              section.classList.add('visible');
          }
      });
  }, {
      threshold: 0.5
  });

  sections.forEach(section => {
      observer.observe(section);
  });

  window.addEventListener("scroll", () => {
      lastScrollTop = window.scrollY;
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.qa-question');

  questions.forEach(function(question) {
      question.addEventListener('click', function() {
          const parentItem = this.closest('.qa-item');

          parentItem.classList.toggle('active');

          console.log('Question clicked:', parentItem);
      });
  });
});

document.getElementById('connectButton').addEventListener('click', function() {
  window.location.href = 'https://app.tradingfury.fr/';
});


document.getElementById('emailForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('unique-email').value;

  try {
    const response = await fetch('https://api.tradingfury.fr/v1/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        type: 'sign_up'
      })
    });

    if (response.ok) {
      console.log('Email submitted successfully');
    } else {
      console.error('Failed to submit email:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    window.location.href = 'https://app.tradingfury.fr/';
  }
});


document.getElementById('newsletterEmail').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.querySelector('input[name="email"]').value;

  try {
    const response = await fetch('https://api.tradingfury.fr/v1/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        type: 'newsletter'
      })
    });

    if (response.ok) {
      console.log('Email submitted successfully');
    } else {
      console.error('Failed to submit email:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});


