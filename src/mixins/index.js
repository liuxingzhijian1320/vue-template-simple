import setTitle from 'assets/scripts/settitle';
//import axios from 'assets/scripts/http'

export default {
  methods: {
    /**
     * 代理 HTTP 请求;
     * @param  {Function}  func      http 请求函数
     * @param  {Boolean} loading    是否显示 loading 弹窗
     * @param  {Boolean} alertError 是否弹出捕获的错误
     * @return {Promise}            resolve(res); res 是 http 请求的结果
     */
    setTitle: setTitle,  //页直接调用 this.setTitle('好人一生平安')
    //axios: axios,  //页直接调用 this.axios.get()
  },
};
