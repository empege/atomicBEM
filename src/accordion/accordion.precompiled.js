(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['accordion'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " m-accordion--"
    + container.escapeExpression(container.lambda(depth0, depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"m-accordion__item\">\r\n    <div class=\"m-accordion__header js-accordion-header\">\r\n      <h1 class=\"m-accordion__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":46}}}) : helper)))
    + "</h1>\r\n      <span class=\"m-accordion__icon m-accordion__icon--active js-acordion-icon\">\r\n        <i class=\"fas fa-plus\"></i>\r\n      </span>\r\n      <span class=\"m-accordion__icon js-acordion-icon\">\r\n        <i class=\"fas fa-minus\"></i>\r\n      </span>\r\n    </div>\r\n    <div class=\"m-accordion__content js-accordion-content\">\r\n      <p class=\"m-accordion__paragraph js-accordion-paragraph\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":16}}}) : helper)))
    + "\r\n      </p>\r\n    </div>\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"m-accordion"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"modifiers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":77}}})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"accordionData") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "</section>";
},"useData":true});
})();