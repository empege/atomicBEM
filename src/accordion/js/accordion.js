$(function () {

  // Selectors
  const accordion = {};
  accordion.selectors = {
    header: '.js-accordion-header',
    content: '.js-accordion-content',
    paragraph: '.js-accordion-paragraph',
    icon: '.js-acordion-icon',
  }

  //Elements
  const accordionHeaders = $(accordion.selectors.header);

  //AddEventListeners
  accordionHeaders.on('click', (e) => toggleSlideAccordionItem(e))

  //Functions
  /*
  * Handles opening and closing of accordion items
  * returns {void}
  */
  const toggleSlideAccordionItem = (e) => {
    const article = $(e.currentTarget).parent();
    const header = $(e.currentTarget);
    const content = article.find(accordion.selectors.content);
    const paragraph = content.find(accordion.selectors.paragraph);
    const paragraphHeight = paragraph.height();
    const icons = article.find(accordion.selectors.icon);
    console.log(icons);
    if (header.hasClass('accordion__header--active')) {
      header.removeClass('accordion__header--active');
      content.css('maxHeight', '0');
      icons.toggleClass('display-none');
    }
    else {
      header.addClass('accordion__header--active');
      content.css('maxHeight', `${paragraphHeight + 80}px`); // Ovde mi treba neki size koji je default za padding, a ne ovako da zakucavam.
      icons.toggleClass('display-none');
    }
  }











});