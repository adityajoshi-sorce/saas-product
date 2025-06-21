const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("nav-menu");

      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });


const carousel = document.querySelector(".testimonial-carousel");
      const leftArrow = document.querySelector(".arrow.left");
      const rightArrow = document.querySelector(".arrow.right");
      let currentIndex = 0;

      function updateCarousel() {
        const cardWidth =
          carousel.querySelector(".testimonial-card").offsetWidth + 20;
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }

      rightArrow.addEventListener("click", () => {
        const totalCards =
          document.querySelectorAll(".testimonial-card").length;
        const visibleCards =
          window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        if (currentIndex < totalCards - visibleCards) {
          currentIndex++;
          updateCarousel();
        }
      });

      leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });

      window.addEventListener("resize", updateCarousel); // adjust on screen resize

    
  const track = document.querySelector(".slider-track");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  let index = 0;

  function updateSlider() {
    const slideWidth = document.querySelector(".slide").offsetWidth + 20;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  rightBtn.addEventListener("click", () => {
    const totalSlides = document.querySelectorAll(".slide").length;
    const visibleSlides = window.innerWidth < 768 ? 1 : 2;
    if (index < totalSlides - visibleSlides) {
      index++;
      updateSlider();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);

const counters = document.querySelectorAll(".count");

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const current = +counter.innerText;
          const increment = target / 100;

          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText =
              target >= 1000000 ? (target / 1000000).toFixed(1) + "M" : target;
          }
        };
        updateCount();
      });

      
  const items = document.querySelectorAll(".accordion-item");

  items.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-item.active");

      if (openItem && openItem !== item) {
        openItem.classList.remove("active");
        openItem.querySelector(".accordion-body").style.maxHeight = null;
        openItem.querySelector(".icon").textContent = "+";
      }

      item.classList.toggle("active");

      const body = item.querySelector(".accordion-body");
      const icon = item.querySelector(".icon");

      if (item.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
        icon.textContent = "−";
      } else {
        body.style.maxHeight = null;
        icon.textContent = "+";
      }
    });
  });


  let scrollIndex1 = 0;

      function scrollCarousel1(direction) {
        const track = document.getElementById("carousel-track-1");
        const card = track.querySelector(".scroll-sec-card-1");
        const cardWidth = card.offsetWidth + 20; // gap included
        const visibleCards = Math.floor(track.offsetWidth / cardWidth);
        const totalCards = track.children.length;

        scrollIndex1 += direction;

        const maxIndex = totalCards - visibleCards;
        if (scrollIndex1 < 0) scrollIndex1 = 0;
        if (scrollIndex1 > maxIndex) scrollIndex1 = maxIndex;

        track.style.transform = `translateX(-${scrollIndex1 * cardWidth}px)`;
      }

