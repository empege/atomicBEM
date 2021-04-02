$(function () {

  /* SELECTORS */
  // find trazi '.', dok hasClass npr. ne sme da je ima jer gleda '.' kao deo imena
  let sliderMH = {
    selectors: {
      slider: '.js-slider',
      slide: '.js-slide',
      sliderInner: '.js-slider-inner',
      sliderArrow: '.js-slide-arrow',
      arrowLeft: '.js-arrow-left',
      arrowRight: '.js-arrow-right',
      currentSlide: '.js-current-slide',
    },
    selectorsCSS: {
      slider: 'm-slider',
      slide: 'm-slider__slide',
      sliderInner: 'm-slider__inner',
      currentSlide: 'm-slider__slide--current',
      sliderContent: 'm-slider__content'
    }
  }

  const allSliders = $(sliderMH.selectors.slider);

  allSliders.each(function (id, currentSlider) {

    /* ELEMENTS */
    const slider = $(currentSlider);
    const sliderInner = slider.find(sliderMH.selectors.sliderInner);
    const slides = slider.find(sliderMH.selectors.slide);
    const slide = slider.find(sliderMH.selectors.slide);
    const arrowLeft = slider.find(sliderMH.selectors.arrowLeft);
    const arrowRight = slider.find(sliderMH.selectors.arrowRight);

    // Event Listeners
    if (window.PointerEvent) {
      slider.on('pointerdown', sliderMouseDown);
      slider.on('pointermove', sliderMouseMove);
      slider.on('pointerleave', sliderMouseLeaveOrUp)
      slider.on('pointerup', sliderMouseLeaveOrUp)
    } else {
      slider.on('mousedown', sliderMouseDown);
      slider.on('mousemove', sliderMouseMove);
      slider.on('mouseleave', sliderMouseLeaveOrUp)
      slider.on('mouseup', sliderMouseLeaveOrUp)

      slider.on('touchdown', sliderMouseDown);
      slider.on('touchmove', sliderMouseMove);
      slider.on('touchleave', sliderMouseLeaveOrUp)
      slider.on('touchup', sliderMouseLeaveOrUp)
    }
    arrowLeft.on('click', () => slideLeft());
    arrowRight.on('click', () => slideRight());
    sliderInner.on('transitionend webkitTransitionEnd oTransitionEnd', expandCurrentSlide);
    sliderInner.on('transitionend webkitTransitionEnd oTransitionEnd', checkSlideIndex);
    slides.on('click', checkClickedSlide)

    /* letIABLES */
    // Width of slide element
    let slideWidth = slide.outerWidth();
    let translateDivisionAmount;
    // As there are copies of all slides to the left and right, we divide number of all by 3, and the middle ones are the ones we are going to see. We get startIndex as below:
    const startIndex = slides.length / 3;
    const lastIndex = startIndex + startIndex - 1;
    let index = startIndex;
    let isSliding = false; //Slide sliding
    let isMoving = false; //Mouse moving
    let mouseLastPosition = 0;
    let diffx = 0;

    // Sets up slideWidth on resize and reloads the slides position
    $(window).on('resize', () => {
      slideWidth = slide.outerWidth();
      checkWindowSize();
      loadSlides();
    });
    function checkWindowSize() {
      // Na 767 i 768 ne radi kad se bas resize...
      if ($(window).width() <= 767) {
        translateDivisionAmount = 8;
      } else {
        translateDivisionAmount = 2;
      }
    }
    checkWindowSize();

    // Set slider to be at the startIndex slide, transition: none so it's not visible to user.
    function loadSlides() {
      sliderInner.css('transform', `translateX(${-slideWidth * index + slideWidth / translateDivisionAmount}px)`);
      slides.eq(index).addClass([sliderMH.selectors.currentSlide, sliderMH.selectorsCSS.currentSlide]);
    }
    loadSlides();

    // Slide left and right - show slider based on current index
    function slideFoo() {
      sliderInner.css('transition', '.4s all')
      sliderInner.css('transform', `translateX(${-slideWidth * index + slideWidth / translateDivisionAmount}px)`);
      slides.removeClass([sliderMH.selectors.currentSlide, sliderMH.selectorsCSS.currentSlide]);
    }

    function sliderMouseDown(e) {
      // Kad se klikne desni pa levi, on prepozna mouse down, ali ne mouse up. Zato gledaj samo levi klik: levi = 0, mousewheel = 1, desni = 2
      if (!$(e.target).hasClass(sliderMH.selectors.sliderArrow) && e.button === 0) {
        isMoving = true;
        mouseLastPosition = e.pageX;
      }
    }

    function sliderMouseMove(e) {
      if (isMoving) {
        diffx = e.pageX - mouseLastPosition;
        // Transition je samo zezao brzinu pokreta misa kad dragujes...
        sliderInner.css('transition', 'none');
        sliderInner.css('transform', `translateX(${-slideWidth * index + slideWidth / translateDivisionAmount + diffx}px)`);
      }
    }

    function sliderMouseLeaveOrUp() {
      isMoving = false;
      if (diffx >= slideWidth / 2) {
        slideLeft();
      }
      if (diffx <= - (slideWidth / 2)) {
        slideRight();
      }
      if (diffx > - (slideWidth / 2) && diffx < slideWidth / 2 && diffx !== 0) {
        slideFoo();
      }
      if (diffx === 0 && !slider.find(sliderMH.selectors.currentSlide)) {
        slides.eq(index).addClass([sliderMH.selectors.currentSlide, sliderMH.selectorsCSS.currentSlide])
      }
      diffx = 0;
    }

    // Check slider index - rearange translateX if index is below start or above last
    function checkSlideIndex(e) {
      // if (e.originalEvent.srcElement.className.includes('js-slider-inner')) {
      // if ($(e.target).hasClass('js-slider-inner')) {
      //Ovaj .is je mnogo sporiji, ali radi kad u selectoru gore imam tacku
      //Jel ovo mesanje jsa i jquery??
      if (e.originalEvent.propertyName !== 'transform') {
        return;
      }
      if ($(e.target).is(sliderMH.selectors.sliderInner)) {
        if (index < startIndex) {
          sliderInner.css('transition', 'none');
          index = lastIndex;
          sliderInner.css('transform', `translateX(${-slideWidth * index + slideWidth / translateDivisionAmount}px)`);
        } else if (index > lastIndex) {
          sliderInner.css('transition', 'none');
          index = startIndex;
          sliderInner.css('transform', `translateX(${-slideWidth * index + slideWidth / translateDivisionAmount}px)`);
        }
        // Ovo treba da bude na kraju expand currenta! - ali ni kod njih nije ocigledno pa moze i da ostane...
        isSliding = false;
      }
    }

    // Expand current slide after the transitions have ended
    function expandCurrentSlide(e) {
      if (e.originalEvent.propertyName !== 'transform') {
        return;
      }
      if ($(e.target).is(sliderMH.selectors.sliderInner)) {
        if (index < startIndex) {
          slides.eq(lastIndex).addClass([sliderMH.selectors.currentSlide, sliderMH.selectorsCSS.currentSlide])
        } else if (index > lastIndex) {
          slides.eq(startIndex).addClass([sliderMH.selectors.currentSlide, sliderMH.selectorsCSS.currentSlide])
        } else {
          slides.eq(index).addClass([sliderMH.selectors.currentSlide, sliderMH.selectorsCSS.currentSlide])
        }
      }
    }

    function slideRight() {
      if (!isSliding) {
        isSliding = true;
        index++;
        slideFoo();
      }
    }
    function slideLeft() {
      if (!isSliding) {
        isSliding = true;
        index--;
        slideFoo();
      }
    }

    // Check which slide is clicked: If current then go to link, if prev or next image clicked, then do next / prev button.
    function checkClickedSlide(e) {
      let clickedWrapper = $(e.currentTarget);
      let clickedElement = $(e.target);
      if (clickedWrapper.hasClass(sliderMH.selectors.currentSlide)) {
        return true;
      }
      e.preventDefault();
      if (clickedElement.prop('tagName') === 'IMG') {
        if (clickedWrapper.prev().hasClass(sliderMH.selectors.currentSlide)) {
          slideRight();
        } else if (clickedWrapper.next().hasClass(sliderMH.selectors.currentSlide)) {
          slideLeft();
        } else {
          slideFoo();
        }
      }
    }
  })

});