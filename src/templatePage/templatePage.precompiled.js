(function () {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['templatePage'] = template({
    "compiler": [8, ">= 4.3.0"], "main": function (container, depth0, helpers, partials, data) {
      return "<div id=\"faq-page\" style=\"max-width: 1200px; margin: 0 auto\">\n  <div class=\"faq-page-wrapper\">\n    <h1>Some Template Page</h1>\n    <div class=\"slider-test-container\"></div>\n  </div>\n</div>";
    }, "useData": true
  });
})();