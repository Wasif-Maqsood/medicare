$(document).ready(function () {
  $('.process__menu-list > li:eq(0) span').addClass('active').next().slideDown();

  $('.process__menu-list span').click(function (j) {
    var dropDown = $(this).closest('li').find('p');

    // $(this).closest('.process__menu-list').find('p').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      // $(this).closest('.process__menu-list').find('span.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
});