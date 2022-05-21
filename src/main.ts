import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import router from './routes';

createApp(App).use(store).use(router).mount('#app');
