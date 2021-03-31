(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " m-modal--"
    + container.escapeExpression(container.lambda(depth0, depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"m-modal"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"modifiers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":65}}})) != null ? stack1 : "")
    + " js-modal\">\n  <div class=\"m-modal__background js-modal-background\"></div>\n  <div class=\"m-modal__inner\">\n    <header class=\"m-modal__header\">\n      <h1 class=\"m-modal__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":33},"end":{"line":5,"column":42}}}) : helper)))
    + "</h1>\n      <button class=\"m-modal__exit-button js-modal-exit-btn\"><i class=\"fas fa-times\"></i>\n      </button>\n    </header>\n    <div class=\"m-modal__paragraph\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":36},"end":{"line":9,"column":44}}}) : helper)))
    + "</div>\n    <footer class=\"m-modal__footer\">\n      <button class=\"a-button m-modal__button\">Accept</button>\n      <button class=\"a-button m-modal__button\">Decline</button>\n    </footer>\n  </div>\n</div>";
},"useData":true});
})();