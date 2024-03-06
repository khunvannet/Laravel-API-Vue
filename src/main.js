import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@fontsource/koho/200.css";
import "@fontsource/koho/300.css";
import "@fontsource/koho/400.css";
import "@fontsource/koho/500.css";
import "@fontsource/koho/600.css";
import "@fontsource/koho/700.css";
import "./assets/global.css"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAnglesRight, faSearch, faShoppingCart, faSignIn, faSignOut, faUser,faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faRegistered } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faUserSecret,faUser,faSearch,faShoppingCart,faAnglesRight,faSignIn,faRegistered,faSignOut)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
