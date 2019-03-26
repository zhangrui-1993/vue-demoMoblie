  //import Vue from 'vue'
// // import Validator from 'vue-validator'
// // Vue.use(Validator)
// // //自定义验证器
// // //添加一个简单的手机号验证 
// // //匹配0-9之间的数字,并且长度是11位
// // Vue.validator('tel', function (val) {
// //   return /^[0-9]{11}$/.test(val)
// // });
// // //添加一个密码验证
// // //匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
// // Vue.validator('passw', function (val) {
// //   return /^(\w){6,20}$/.test(val)
// // });
 import Vue from 'vue'

import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('zh_CN', zh_CN);

// Install the Plugin.
Vue.use(VeeValidate);
// import VeeValidate from 'vee-validate';
// import zh_CN from 'vee-validate/dist/locale/zh_CN'; //引入中文包，提示信息可以以中文形式显示
// import { Validator } from 'vee-validate';

// Validator.addLocale(zh_CN); // 设置提示信息中文方式显示

// const config = {
//   errorBagName: 'errors', 
//   fieldsBagName: 'fields',
//   delay: 100,   
//   locale: 'zh_CN', 
//   strict: true,  
//   enableAutoClasses: true,
//   events: 'blur', 
//   inject: true
// };
// Vue.use(VeeValidate, config);

// Validator.extend('qq', {
//   messages: {
//  zh_CN:field => 'qq号码输入不正确'
//   },
//   validate: value => {
//  // 获取输入的value
//  return /^[1-9][0-9]{4,14}$/.test(value);
//   }
// });

// import VeeValidate from 'vee-validate';
// import zh_CN from 'vee-validate/dist/locale/zh_CN'; //引入中文包，提示信息可以以中文形式显示
// import { Validator } from 'vee-validate';

// Validator.addLocale(zh_CN); // 设置提示信息中文方式显示

// const config = {
//   errorBagName: 'errors', 
//   fieldsBagName: 'fields',
//   delay: 100,   
//   locale: 'zh_CN', 
//   strict: true,  
//   enableAutoClasses: true,
//   events: 'blur', 
//   inject: true
// };
// Vue.use(VeeValidate, config); //一般插件都要use一下

// import Validator from 'vue-validator'
// Vue.use(Validator)

// import Vue from 'vue'
// import VeeValidate, {Validator} from 'vee-validate'
// import zh from 'vee-validate/dist/locale/zh_CN'//引入中文文件

// // 配置中文
// Validator.addLocale(zh);

// const config = {
//   locale: 'zh_CN'
// };

// Vue.use(VeeValidate,config);
// const validator = (value, args) => {
//     // Return a Boolean or a Promise.
// }
// var validator=function(value, args){
  
// }


// 自定义validate 
// const dictionary = {
//    zh_CN: {
//       messages: {
//         email: () => '请输入正确的邮箱格式',
//         required: ( field )=> "请输入" + field
//       },
//       attributes:{
//         email:'邮箱',
//         password:'密码',
//         name: '账号',
//         phone: '手机'
//       }
//   }
// };

// Validator.updateDictionary(dictionary);

// Validator.extend('phone', {
//   messages: {
//     zh_CN:field => field + '必须是11位手机号码',
//   },
//   validate: value => {
//     return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//   }
// });