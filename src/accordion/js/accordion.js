$(function () {

  // Selectors
  const accordion = {
    selectors: {
      header: '.js-accordion-header',
      content: '.js-accordion-content',
      paragraph: '.js-accordion-paragraph',
      icon: '.js-acordion-icon',
    },
    // Zaboravih kako se zove ovo selectorsCSS
    selectorsCSS: {
      headerActive: 'm-accordion__header--active',
      iconActive: 'm-accordion__icon--active'
    }
  };

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
    const paragraphHeight = paragraph.outerHeight(true);
    const icons = article.find(accordion.selectors.icon);
    icons.toggleClass(accordion.selectorsCSS.iconActive);
    if (header.hasClass(accordion.selectorsCSS.headerActive)) {
      header.removeClass(accordion.selectorsCSS.headerActive);
      content.css('maxHeight', '0');
    }
    else {
      header.addClass(accordion.selectorsCSS.headerActive);
      content.css('maxHeight', `${paragraphHeight}px`);
    }
  }











});