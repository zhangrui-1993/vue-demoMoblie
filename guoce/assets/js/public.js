function mousePos(e) {
  e = e || window.event;
  var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;//分别兼容ie和chrome
  var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  var x = e.pageX || (e.clientX + scrollX);//兼容火狐和其他浏览器
  var y = e.pageY || (e.clientY + scrollY);
  return {x: x, y: y};
}

$(function () {
  $('#header').load('../header.html',function(){
    $('#header a').each(function(){
      if( $(this).attr('href') == String('.'+window.location.pathname) ){
        $(this).addClass('active');
        if (!$(this).is(':visible')) {
          $(this).parent().parent().show()
          $(this).parent().show()

          if ($(this).attr('href') == './watchPage.html' || $(this).attr('href') == './designIdea.html' || $(this).attr('href') == './specification.html' || $(this).attr('href') == './productAndService-watch.html') {
            $('#header ul a').eq(1).addClass('active')
          } else if ($(this).attr('href') == './appPage.html' || $(this).attr('href') == './productAndService-app.html' ) {
            $('#header ul a').eq(2).addClass('active')
          }
        }
      }
    });
    $('#header ul li').on('click','a',function(){
      if($(this).text() === '智养腕表'){
        if (!$(this).hasClass('active')) {
          window.location = './watchPage.html'
        }
      } else if ($(this).text() === '锦穗健康') {
        if (!$(this).hasClass('active')) {
          window.location = './watchPage.html'
        }
      }
    })
  });
  $('#footer').load('../footer.html',()=>{
    $('footer .link li').on('click','div',function(){
      if ($('footer .link').css('display') === 'flex') return false
      if ($(this).hasClass('show')){
        $(this).removeClass('show');
        $(this).siblings().css('display','none');
      }else{
        $(this).siblings().show();
        $(this).addClass('show').parent().siblings().find('.show').removeClass('show');
        $(this).siblings().css('display','block');
        $(this).parent().siblings().find('a,span').css('display','none');
      }
    })
  });
  // let name = window.location.pathname
  // name = name.slice(1,name.length-5)
  setTimeout(() => {
    // if (name === '') {
    //   $('.index').addClass('active')
    // }else if(name === 'watchPage'){
    //   $('.watchPage').addClass('active')
    //   $('#header div[data-name="watchPage"]').show()
    //   $('#header div[data-name="watchPage"] a').eq(0).addClass('active')
    // }else if (name === 'specification'){
    //   $('.watchPage').addClass('active')
    //   $('#header div[data-name="watchPage"]').show()
    //   $('#header div[data-name="watchPage"] a').eq(2).addClass('active')
    // }else if(name === 'designIdea'){
    //   $('.watchPage').addClass('active')
    //   $('#header div[data-name="watchPage"]').show()
    //   $('#header div[data-name="watchPage"] a').eq(1).addClass('active')
    // }else if(name === 'productAndService-watch'){
      
    // }else if( $('.'+name).is(':visible') ){
    //   $('.'+name).addClass('active')
    // }else {
    //   return false
    // }
  }, 100); 
  var Mobile = {
    fontSizeInit: function(){
      var _w = $(window).width();
      var size = (_w / 750) * 100;
      if(size > 100){
        size = 100;
      }
      $('html').css('font-size', size+'px');
    },
    addScrollDisable: function(){
      $(window).on('scroll.elasticity', function (e) {   
          e.preventDefault();
      }).on('touchmove.elasticity', function (e) {
          e.preventDefault();
      });
    },
    removeScrollDisable: function(){
      $(window).off('scroll.elasticity').off('touchmove.elasticity');
    }
  }
  Mobile.fontSizeInit();
  $(window).on('resize', function(){
    Mobile.fontSizeInit();
  }); 
}); 

//禁止复制文本，仅对文本框中的文本有效<text><textarea>
document.onselect = function (event) {
    document.getSelection().empty();
};

//禁止复制
document.oncopy = function (event) {
  return false;
};

//禁止鼠标拖动，如拖动图片、连接等
document.ondragstart = function (event) {
  return false;
};

//获取url地址id参数GetRequest START
function GetRequest() {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
  }
  return theRequest;
}

$.fn.typewriter = function(interval = 75,el) {
  var _self = $(el);
  _self.width($(el).width());
  _self.height($(el).height());
  this.each(function() {
    var $ele = $(this)
    var str = $ele.html()
    var progress = 0
    $ele.html('')
    var timer = setInterval(function() {
      var current = str.substr(progress, 1)
      if (current == '<') {
        progress = str.indexOf('>', progress)
      } else {
        progress++
      }
      $ele.html(`${str.substring(0, progress)}${(progress & 1 ? '_' : '')}`)
      if (progress > str.length) {
        $ele.html(`${str.substring(0, progress)}`)
        clearInterval(timer)
      }
    }, interval)
  });
  console.log(el)
  return;
};

// 是否为pc
let isPC = function() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "BlackBerry", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}()
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7d0f279a89f0cdeff613fb72b05e2d08";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//提示框
function yushou(){
  $('.quntum-support-alertBlock').fadeIn()
}
$('.quntum-support-alertBlock').click(function() {
  $('.quntum-support-alertBlock').fadeOut()
})
// 线上接口前缀
var formalDress = 'http://59.110.174.60:8087/'
var formalImgDress = 'http://59.110.174.60:8080/HomeMedia/'
// 测试接口前缀
var testClothes = 'http://10.9.141.66:8087/'
var testImgClothes = 'http://10.9.141.218:8080/HomeMedia/'