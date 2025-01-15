import axios from 'axios';
import { ElMessage } from 'element-plus/lib/components';

const ctapi = axios.create({
  baseURL: 'https://rest.ctfile.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

ctapi.interceptors.request.use(
  (config) => {
    const { user } = useStore();
    if (!user.token) {
      return Promise.reject(new Error('token is empty'));
    }
    if (config.method === 'post' || config.method === 'POST') {
      config.data = {
        ...config.data,
        session: user.token,
      };
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

ctapi.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data.data;
    }
    if (response.data.code === 401) {
      const { user } = useStore();
      ElMessage.error(response.data.message || '登录已过期，请重新登录');
      user.logout();
    }
    if (response.data.code === 403) {
      ElMessage.error(response.data.message);
    }
    return Promise.reject(new Error(response.data.message));
  },
  (error) => {
    console.error(error);
    ElMessage.error('请求异常');
    return Promise.reject(error);
  },
);

export default ctapi;
