$(document).ready(function () {

  const sidebar = {
    selectors: {
      sidebar: '.js-sidebar',
      show: '.js-sidebar-show',
      hide: '.js-sidebar-hide'
    },
    selectorsCSS: {
      active: 'o-sidebar--active'
    }
  };

  const sidebarElement = $(sidebar.selectors.sidebar);
  const sidebarHideIcon = $(sidebar.selectors.hide);
  const sidebarShowIcon = $(sidebar.selectors.show);

  sidebarHideIcon.on('click', () => hideSidebar());
  sidebarShowIcon.on('click', () => showSidebar());

  const hideSidebar = () => {
    sidebarElement.removeClass(sidebar.selectorsCSS.active);
    sidebarShowIcon.removeClass('display-none');
  }
  const showSidebar = () => {
    sidebarElement.addClass(sidebar.selectorsCSS.active);
    sidebarShowIcon.addClass('display-none');
  }

});