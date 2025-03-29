<script>
  // Select key elements
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // Current slide index (which "set" of slides is in view)
  let currentSlide = 0;

  // How many slides do we want to show at once?
  // (Adjust based on your layout)
  const slidesToShow = 3;

  // Calculate the maximum index for the "sets" of slides
  // e.g., if you have 4 slides and show 3 at a time, max index is (4 - 3) = 1
  const totalSlides = slides.length;
  const maxSlideIndex = totalSlides - slidesToShow;

  // Function to go to a particular slide index
  function goToSlide(index) {
    // Ensure the index is within valid range
    if (index < 0) index = maxSlideIndex;
    if (index > maxSlideIndex) index = 0;

    currentSlide = index;
    // Move the slider using a percentage based on how many slides are visible
    const translateX = -(currentSlide * (100 / slidesToShow));
    slider.style.transform = `translateX(${translateX}%)`;
  }

  // Prev button click
  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
  });

  // Next button click
  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
  });
</script>
