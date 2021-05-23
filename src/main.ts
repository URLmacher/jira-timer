import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';
import { locale } from '@/data/moment.locale.de';

moment.locale('de', locale);

const app = createApp(App);
app.use(router).mount('#app');
