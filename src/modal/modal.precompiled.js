(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal "
    + alias4(((helper = (helper = lookupProperty(helpers,"theme") || (depth0 != null ? lookupProperty(depth0,"theme") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theme","hash":{},"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":27}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"enterMode") || (depth0 != null ? lookupProperty(depth0,"enterMode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"enterMode","hash":{},"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":41}}}) : helper)))
    + "\">\n  <div class=\"modal__background js-modal-background\"></div>\n  <div class=\"modal__inner\">\n    <header class=\"modal__header\">\n      <h1 class=\"modal__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":40}}}) : helper)))
    + "</h1>\n      <button class=\"modal__exit-button js-modal-exit-btn\"><i class=\"fas fa-times\"></i>\n      </button>\n    </header>\n    <div class=\"modal__paragraph\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":42}}}) : helper)))
    + "</div>\n    <footer class=\"modal__footer\">\n      <!-- This gon be if else when template -->\n      <button class=\"button modal__button\">Accept</button>\n      <button class=\"button modal__button\">Decline</button>\n    </footer>\n  </div>\n</div>";
},"useData":true});
})();