$(function() {
  let currentMenu = null;

  $('.main-menu li').on('click', function () {
    const target = $(this).data('menu');

    // 같은 메뉴를 다시 클릭했을 때 => 닫기
    if (currentMenu === target) {
      $('.submenu-wrapper').removeClass('active');
      $('.submenu').hide();
      currentMenu = null;
    } else {
      // 다른 메뉴 클릭 시 => 해당 메뉴 열기
      $('.submenu').hide(); // 모두 감추고
      $('#' + target).show(); // 해당 submenu만 보여줌
      $('.submenu-wrapper').addClass('active');
      currentMenu = target; // 현재 메뉴 기록
    }
  });
});
