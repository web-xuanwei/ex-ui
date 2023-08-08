import { createApp } from "vue";
import App from "./app.vue";
import exUI from '@ex-ui/components';

const app = createApp(App);

app.use(exUI);

app.mount("#app");