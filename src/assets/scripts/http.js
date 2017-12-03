/**
 * 封装axios的操作，拦截器
 */
import axios from 'axios';
// import { MessageBox,Indicator } from 'mint-ui';

//请求超时的操作（这里设置为5s的）的操作
axios.defaults.timeout = 5000;

// http请求拦截器
axios.interceptors.request.use(
	config => {
		Indicator.open({
			text: 'Loading...',
			spinnerType: 'fading-circle',
		});
		return config;
	},
	error => {
		Indicator.close();
		MessageBox.alert('加载超时');
		return Promise.reject(error);
	}
);
// http响应拦截器
axios.interceptors.response.use(
	data => {
		// 响应成功关闭loading
		Indicator.close();
		return data;
	},
	error => {
		Indicator.close();
		MessageBox.alert('加载失败');
		return Promise.reject(error);
	}
);

export default axios;
