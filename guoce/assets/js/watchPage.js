let watchPage = {}
// 数据子页icon点击/自动切换
function openPopup(e){
  if (e === 'quntum-mobile-popup-1') {
    let changeImage = setInterval(() => {
      let index = parseInt($('.quntum-mobile-popup-controller li.active>span').attr('data-index'))
      index = index == 9 ? 1 : index+=1
      $(`.quntum-mobile-popup-controller span[data-index="${index}"]`).parent().addClass('active').siblings().removeClass('active')
      $('.quntum-mobile-popup-watchFrame').attr('data-show',index)
    },3000)
    $('#quntum-mobile-popup-close').on('click',function(){
      $('.quntum-mobile-popup').fadeOut();
      setTimeout(() => {
        $('.quntum-mobile-popup').prev().fadeIn();
        window.scrollTo(0,watchPage.old_top);
        $('#footer').show();
      }, 400);
      clearInterval(changeImage)
    })
  }
  watchPage.old_top = $(window).scrollTop()
  $(`.quntum-mobile-popup .${e}`).show().siblings().not('#quntum-mobile-popup-close').hide()
  $('#footer').hide();
  $('.quntum-mobile-popup').prev().fadeOut();
  setTimeout(() => {
    $('.quntum-mobile-popup').fadeIn();
    window.scrollTo(0,0)
  }, 400);
}