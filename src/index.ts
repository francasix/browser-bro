import Vue from "vue";
import App from "./App.vue";
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

new Vue({
    el: "#app",
    template: `
    <div>
        <App />
    </div>`,
    components: { App },

});

