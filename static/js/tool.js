// 登录系统地址
// var loginUrl='http://t-login.yu500.com';
// // 管理后台系统地址
// var sysUrl='http://localhost:21000';

/**
 * 公用ajax请求weixin
 * @author xuehj
 * @param urls
 * @param params
 * @param successFunc
 * @since 2018-03-23
 */
// function sendReq (urls, params, successFunc) {
//     var token = sessionStorage.getItem("token");
//     if (token) {
//         params.token=token;
//     }
//     $.ajax({
//         type: "post",
//         contentType: 'application/json;charset=utf-8',
//         dataType: 'json',
//         url: urls,
//         data: JSON.stringify(params),
//         cache: false,
//         async: true,
//         success: function(data){
//             successFunc(data);
//             // 下面未登录跳转到登录页
//             if (data.returnCode=="yuju-1022") {
//             	  window.location.href = 'http://localhost:8080/#/login';
//                 console.info('用户未登录');
//             }
//         }
// 	  });
// };
function getEnum (value,enums) {//根据枚举值取出内容
  for(var pro in enums){
    if ( enums[pro].value==value){
      return enums[pro].label
    }
  }

};
// function showMessage(){
// 	       //  this.$message({
//         //   showClose: true,
//         //   message: '这是一条消息提示'
//         // });
// }
function titleCase(str) {//字符串首字母转大写

  var array = str.toLowerCase().split(" ");
  for (var i = 0; i < array.length; i++){
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);

    //array[i][0] = array[i][0] + 'A' - 'a';
  }
  var string = array.join(" ");

  return string;
};
function unique(array){//数组去重
  var r = [];
  for(var i = 0, l = array.length; i < l; i++) {
    for(var j = i + 1; j < l; j++)
      if (array[i] === array[j]) j = ++i;
    r.push(array[i]);
  }
  return r;
};
// Array.prototype.removeOne = function(val) {
//   var index = this.indexOf(val);
//   if (index > -1) {
//     this.splice(index, 1);
//   }
// };
//  function removeOne(val) {
//   var index = this.indexOf(val);
//   if (index > -1) {
//     this.splice(index, 1);
//   }
// };
function removeByValue(arr, val) {//删除指定字符
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
};


