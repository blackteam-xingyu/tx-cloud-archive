import { createApp } from 'vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from '@renderer/router';
import App from './App.vue';
import 'element-plus/dist/index.css';
import '@renderer/styles/index.scss';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
