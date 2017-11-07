# vue-template-simple

- [ip的配置](http://blog.csdn.net/zhooson/article/details/74389211)
- [sass的写法](http://blog.csdn.net/zhooson/article/details/63682280)
- [全局设置title](http://blog.csdn.net/zhooson/article/details/77409049)

#### 更多的配置查看blog的其他的文章

### 配置修改
1. build／webpack.base.conf.js
   - 去掉的eslint的语法验证
   - 配置alias
   ```
   'src': resolve('src'),
   'components': resolve('src/components'),
   'views': resolve('src/views'),
   'assets': resolve('src/assets')

   ```

2. 配置normalize.css
   - assets/styles/*
   - app.vue 引入的
   ```
      @import './assets/styles/normalize.scss';
      @import './assets/styles/reset.scss';
      @import './assets/styles/mixin.scss';
      @import './assets/styles/func.css';

    ```

3. rem的布局的（750的比例）
   - assets/scripts/rem.js
   - main.js 引入的
   ```
     import {rem} from 'assets/scripts/rem'
     rem()

    ```

4. mint-ui的引入
   - npm install mint-ui -D
   - main.js 引入的
   ```
     import MessageBox from 'mint-ui/lib/message-box'
     import 'mint-ui/lib/message-box/style.css'
     import Indicator from 'mint-ui/lib/indicator'
     import 'mint-ui/lib/indicator/style.css'
     window.MessageBox  = MessageBox ;//挂在window的对象中，就不用每个文件需要引入，方便又省事，axios的使用方法和此类似
     window.Indicator  = Indicator ;//挂在window的对象中，就不用每个文件需要引入，方便又省事，axios的使用方法和此类似

    ```

4. 全局配axios拦截器
   - npm install axios -D
   - assets/scripts/http.js
   - main.js 引入的（也可以在mixin中写）
   ```
    import axios from 'assets/scripts/http'
    // 将axios挂载到vue对象的原型下边以实现全局通用
    Vue.prototype.axios = axios //组件调用this.axios.get(...)
    //Vue.prototype.$ajax = axios  换个名字 组件调用this.$ajax.get(...)
    //window.axios = axios;  //组件中调用 axios.get(...)

   ```


5. 配置mixin (mixin/index.js)

    - 里面有的setTitle 和 axios的例子的
    - 调用mixin的方法
    ```
     import mixins from './mixins';

     Vue.mixin(mixins);

     ```


6. 修改路由的结构(router/index.js)

    ```
     const router = new Router({

       mode: 'hash', // ['history', 'hash']
       linkActiveClass: 'active', // active class 名称
       scrollBehavior(to, from, savedPosition) { // 后退页面时, 保留滚动位置
         if (savedPosition) {
           return savedPosition;
         }
         return { x: 0, y: 0 };
       },

       routes: [
         {
           path: '/',
           component: home,
           name: 'home',
           meta:{
             title:'test'
           }
         },
         {
           path: "*",
           redirect: { //重定向
             name: 'home'
           }
         }
       ]
     })


     router.beforeEach((to, from, next) => {
        //  登陆拦截
       //...
       next()
     })


     // 路由变化, 关闭弹窗
     router.afterEach(function (to) {
       //...
     })

     export default router;

     ```
  - 移步==> [登陆拦截](http://blog.csdn.net/zhooson/article/details/77368837)



7. assets/scripts/validation
   - 使用方法(例子，代码中没有)
   ```
     import validation from 'assets/script/validation'

     methods：{

       Validate(formData){
             if (validation.isEmpty(formData.name)) {
               MessageBox.alert('请输入姓名')
               return false
             } else if (validation.isEmpty(formData.phone)) {
               MessageBox.alert('请输入您的手机号')
               return false
             } else if (!validation.checkPhone(formData.phone)) {
               MessageBox.alert('您的手机号格式有误')
               return false
             } else {
               return true
             }
           },
           loginHandler(formData){
             if (this.Validate(formData)) {
               //store.set('zhooson_login_token', formData)
               MessageBox.alert('登录成功').then(() => {
                 this.$router.push({ name: 'home' })
               })
             }
           }
         },


     }

   ```


8. 全局的过滤器
  - main.js
   ```
   import * as filters from './filters'

    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key]);
    });


   ```

   - 组件中调用(formatMoney的过滤器查看源码)

    ```
      <span class="popularity">{{film.online | formatMoney}}</span>


    ```


 #### This is a simple vue-template for you

 #### 如果有帮助，麻烦给个❤️
