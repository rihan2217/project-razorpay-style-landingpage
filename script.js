  
function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
  document.body.classList.toggle('menu-open');
}

document.querySelectorAll('.menu > li > a').forEach(link => {
  link.addEventListener('click', function(e){
    if (window.innerWidth < 900) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    }
  });
});


    
      // Carousel functionality

      
      document.addEventListener("DOMContentLoaded", function () {
        const carouselInner = document.querySelector(".carousel-inner");
        const slides = document.querySelectorAll(".carousel-slide");
        const dots = document.querySelectorAll(".carousel-dot");
        let currentSlide = 0;
        const slideCount = slides.length;

        // Function to update carousel position
        function updateCarousel() {
          carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

          // Update active dot
          dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
          });

          // Update active slide
          slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentSlide);
          });
        }

        // Next slide function
        function nextSlide() {
          currentSlide = (currentSlide + 1) % slideCount;
          updateCarousel();
        }

        // Event listeners for dots
        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            currentSlide = index;
            updateCarousel();
          });
        });

        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);

        // Simple animation on scroll for other elements
        const animatedElements = document.querySelectorAll(
          ".feature-card, .testimonial-card, .step, .product-card"
        );

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
              }
            });
          },
          { threshold: 0.1 }
        );

        animatedElements.forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          observer.observe(el);
        });
      });

    // <!-- menu scroll   --> 
    
      
    document.addEventListener("DOMContentLoaded", function () {
      const slides = [...document.querySelectorAll(".unique-slide")];
      const industryButtons = [...document.querySelectorAll(".unique-industry-btn")];
      const dotBox = document.getElementById("uniqueDotsBox");
      const carousel = document.getElementById("uniqueCarousel");

      let currentSlide = 0;
      const totalSlides = slides.length;
      let autoplayInterval = null;
      const AUTOPLAY_TIME = 7000;
      let isPaused = false;

      function buildDots() {
        dotBox.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
          const dot = document.createElement("div");
          dot.className = "unique-dot" + (i === 0 ? " active" : "");
          dot.dataset.index = i;
          dot.addEventListener("click", () => {
            currentSlide = i;
            updateSlides();
            restartAutoplay();
          });
          dotBox.appendChild(dot);
        }
      }

      function updateSlides() {
        slides.forEach((s, i) => s.classList.toggle("active", i === currentSlide));
        industryButtons.forEach((b, i) => b.classList.toggle("active", i === currentSlide));

        [...dotBox.children].forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
      }

      function restartAutoplay() {
        isPaused = false;
        startAutoplay();
      }

      function startAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
          if (!isPaused) nextSlide();
        }, AUTOPLAY_TIME);
      }

      carousel.addEventListener("mouseenter", () => (isPaused = true));
      carousel.addEventListener("mouseleave", () => (isPaused = false));

      industryButtons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          currentSlide = i;
          updateSlides();
          restartAutoplay();
        });
      });

      buildDots();
      updateSlides();
      startAutoplay();
    });
  





        document.addEventListener('DOMContentLoaded', function () {
            const track = document.querySelector('.pf-track');
            const slides = document.querySelectorAll('.pf-slide');
            const dots = document.querySelectorAll('.pf-dot');
            const prevBtn = document.querySelector('.pf-prev');
            const nextBtn = document.querySelector('.pf-next');

            let current = 0;
            const total = slides.length;

            function goToSlide(n) {
                current = n;
                track.style.transform = `translateX(-${current * 102}%)`;

                dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
                prevBtn.disabled = current === 0;
                nextBtn.disabled = current === total - 1;
            }

            prevBtn.addEventListener('click', () => current > 0 && goToSlide(current - 1));
            nextBtn.addEventListener('click', () => current < total - 1 && goToSlide(current + 1));

            dots.forEach(dot => {
                dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.slide)));
            });

            // Auto-play (optional)
            let auto = setInterval(() => current < total - 1 && goToSlide(current + 1), 6000);
            track.addEventListener('mouseenter', () => clearInterval(auto));
            track.addEventListener('mouseleave', () => auto = setInterval(() => current < total - 1 && goToSlide(current + 1), 6000));

            // Init
            goToSlide(0);
        });
    


// <!-- new script  -->

 
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.devhub-card');
            const greenSection = document.querySelector('.devhub-green-section');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });

            if (greenSection) {
                greenSection.style.opacity = '0';
                greenSection.style.transform = 'translateY(40px)';
                greenSection.style.transition = 'all 0.8s ease';
                observer.observe(greenSection);
            }
        });
    

    // <!-- hehehe again  --> 

    
        document.addEventListener('DOMContentLoaded', function () {
            const track = document.querySelector('.payall-track');
            const slides = document.querySelectorAll('.payall-slide');
            const dots = document.querySelectorAll('.payall-dot');
            const prevBtn = document.querySelector('.payall-prev');
            const nextBtn = document.querySelector('.payall-next');

            let current = 0;
            const total = slides.length;

            function goTo(n) {
                current = n;
                track.style.transform = `translateX(-${current * 100}%)`;
                dots.forEach((d, i) => d.classList.toggle('active', i === current));
                prevBtn.disabled = current === 0;
                nextBtn.disabled = current === total - 1;
            }

            prevBtn.addEventListener('click', () => current > 0 && goTo(current - 1));
            nextBtn.addEventListener('click', () => current < total - 1 && goTo(current + 1));

            dots.forEach(dot => {
                dot.addEventListener('click', () => goTo(parseInt(dot.dataset.slide)));
            });

            // Auto-play
            let autoplay = setInterval(() => current < total - 1 && goTo(current + 1), 6000);
            track.addEventListener('mouseenter', () => clearInterval(autoplay));
            track.addEventListener('mouseleave', () => {
                autoplay = setInterval(() => current < total - 1 && goTo(current + 1), 6000);
            });

            goTo(0); // init
        });
    
    
    // Fade-in animation for footer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    });
    observer.observe(document.getElementById("footerContent"));

    // Parallax glow effect on scroll
    window.addEventListener("scroll", () => {
        const glow = document.querySelector(".footer-glow");
        glow.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.1}px)`;
    });


    