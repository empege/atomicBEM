$(document).ready(function () {

  const sidebar = {
    selectors: {
      sidebar: '.js-sidebar',
      show: '.js-sidebar-show',
      hide: '.js-sidebar-hide'
    },
    selectorsCSS: {
      sidebarActive: 'o-sidebar--active'
    },
    generalClasses: {
      displayNone: 'display-none'
    }
  };

  const sidebarElement = $(sidebar.selectors.sidebar);
  const sidebarHideIcon = $(sidebar.selectors.hide);
  const sidebarShowIcon = $(sidebar.selectors.show);

  sidebarHideIcon.on('click', () => hideSidebar());
  sidebarShowIcon.on('click', () => showSidebar());

  const hideSidebar = () => {
    sidebarElement.removeClass(sidebar.selectorsCSS.sidebarActive);
    sidebarShowIcon.removeClass(sidebar.generalClasses.displayNone);
  }
  const showSidebar = () => {
    sidebarElement.addClass(sidebar.selectorsCSS.sidebarActive);
    sidebarShowIcon.addClass(sidebar.generalClasses.displayNone);
  }

});