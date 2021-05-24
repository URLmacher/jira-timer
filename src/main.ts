import { createApp } from 'vue';
import moment from 'moment';
import locale from '@/data/moment.locale.de';
import App from './App.vue';
import router from './router';

moment.locale('de', locale);
const app = createApp(App);

app.use(router).mount('#app');
