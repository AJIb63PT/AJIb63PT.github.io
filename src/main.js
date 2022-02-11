import Vue from "vue";
import App from "./App.vue";
import store from "./veux/store";
import router from "./router/router";
import "material-design-icons-iconfont";
import vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;

new Vue({ vuetify, store, router, render: (h) => h(App) }).$mount("#app");
