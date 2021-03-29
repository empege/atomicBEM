(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['sidebar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidebar js-sidebar\">\n  <div class=\"sidebar__title\">\n    <h1>Test Sidebar (Theme Secondary)</h1>\n    <div class=\"sidebar__icon sidebar__icon--hide js-sidebar-hide\"><i class=\"fas fa-minus\"></i></div>\n    <div class=\"sidebar__icon sidebar__icon--show js-sidebar-show\"><i class=\"fas fa-plus\"></i></div>\n  </div>\n</div>";
},"useData":true});
})();