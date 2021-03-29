const faqData = {
  accordionData: [
    {
      id: '0',
      title: 'What\'s this all about?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '1',
      title: 'Question 1?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '2',
      title: 'Question 2?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '3',
      title: 'Question 3?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]
};
const sidebarData = {
  accordionData: [
    {
      id: '0',
      title: 'What\'s this all about?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '1',
      title: 'Question 1?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '2',
      title: 'Question 2?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a '
    }
  ]
};
const modalData = {
  title: 'Warning',
  text: 'Some text here... Some text here... Some text here... Some text here... Some text here... Some text here...',
  themes: {
    default: 'modal--theme--default',
    warning: 'modal--theme--warning',
    dark: 'modal--theme--dark',
  }
}
const sliderMHData1 = {
  data: [
    {
      title: 'Filter technology in detail',
      text: 'Our filters separate the useful from the harmful. But what is the definition of harmful? And who decides that? In order to find the right solutions, we selectively use all of our system expertise. And we are happy to offer you some insights into how filter technology works in detail in different applications.',
      url: 'https://www.mann-hummel.com/en/research-and-development/filter-technology-in-detail/',
      img: 'https://www.mann-hummel.com/fileadmin/_processed_/4/1/csm_filtertechnik_buehnenbilder_fdf3a1ecf3.jpg',
    },
    {
      title: 'Credentials',
      text: 'For individual large-scale orders or series production, MANN+HUMMEL guarantees the highest quality for the best price. In this way we are able to convince customers in many different sectors that we are the right partner for them. Our references speak for themselves.',
      url: 'https://www.mann-hummel.com/en/the-company/credentials/',
      img: 'https://www.mann-hummel.com/fileadmin/_processed_/6/8/csm_Referenzen_buehnenbild_01_847bdb81ca.jpg',
    },
    {
      title: 'Innovations and creativity',
      text: 'Particulate filter in a motorcycle helmet? Fine dust eater? Bionic filter? – MANN+HUMMEL is using its creativity and ability to take a broader view to develop solutions to meet the challenges of the future. Here we like to take inspiration from nature.',
      url: 'https://www.mann-hummel.com/en/research-and-development/innovations-and-creativity/',
      img: 'https://www.mann-hummel.com/fileadmin/_processed_/0/8/csm_innovation_kreativitaet_buehnenbild_05de1dafc3.jpg',
    },
    {
      title: 'Future trends',
      text: 'The Internet of Things Lab in Singapore, pilot projects against microplastics in water and field tests for electro-mobility are just some of the areas where we are conducting research to help shape the innovations of the future. As filtration experts the demand for our expertise has been greater than ever.',
      url: 'https://www.mann-hummel.com/en/research-and-development/future-trends/',
      img: 'https://www.mann-hummel.com/fileadmin/_processed_/4/8/csm_shaker_teaser_34d75fd1df.jpg',
    },
  ]
}
const sliderMHData2 = {
  data: [
    {
      title: 'FAward-winning air quality',
      text: 'On the podium: Filter Cubes from MANN+HUMMEL win silver at International Paul Pietsch Award of AUTO MOTOR UND SPORT',
      url: 'https://mann-hummel.com/en/the-company/current-topics/press-releases/2021/award-winning-air-quality/',
      img: 'https://www.mann-hummel.com/fileadmin/_processed_/f/7/csm_MANN_HUMMEL-Filter-Cube-am-Stuttgarter-Neckartor_11931b1af1.jpg',
    },
    {
      title: 'MANN+HUMMEL donates antiviral air purifiers to the Stuttgart Children\'s and Youth Hospice',
      text: '',
      url: 'https://www.mann-hummel.com/en/the-company/current-topics/press-releases/2021/mannhummel-donates-antiviral-air-purifiers-to-the-stuttgart-childrens-and-youth-hospice/',
      img: 'https://www.mann-hummel.com/fileadmin/_processed_/3/c/csm_Spenden%C3%BCbergabe_von_antiviralen_Luftreinigern_der_MANN_HUMMEL_Group_an_das_Kinder-_und_Jugendhospiz_Stuttgart_9f94dc2345.jpg',
    },
  ]
}

// Zasto sam ja ovo stavljao ovde uopste??? Svakako require ne radi, niti radi sa onim requirejs niti bilo staa :(
// const Handlebars = require("handlebars");

const renderTemplatePage = (rootElement) => {
  const template = Handlebars.templates.templatePage;
  const ourGeneratedHTML = template();
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}

const renderAccordion = (rootElement, data, theme = 'accordion--theme--primary') => {
  const template = Handlebars.templates.accordion; // . || ['']
  data.theme = theme;
  const ourGeneratedHTML = template(data);
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}

const renderSidebar = (rootElement) => {
  const template = Handlebars.templates['sidebar'];
  const ourGeneratedHTML = template();
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}

const renderModal = (rootElement, data, theme = 'modal--theme--default', enterMode = 'modal--active--default') => {
  const template = Handlebars.templates.modal;
  data.theme = theme;
  data.enterMode = enterMode;
  const ourGeneratedHTML = template(data);
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}

const renderSliderMH = (rootElement, data) => {
  const template = Handlebars.templates.slidermh;
  const ourGeneratedHTML = template(data);
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}

renderTemplatePage('#root');
renderModal('#faq-page', modalData, 'modal--theme--dark', 'modal--active--fadein');
renderAccordion('.faq-page-wrapper', faqData, 'accordion--theme--primary');
renderSidebar('#faq-page');
renderAccordion('.sidebar', sidebarData, 'accordion--theme--secondary');
renderSliderMH('.slider-test-container', sliderMHData1);
renderSliderMH('#faq-page', sliderMHData2);
