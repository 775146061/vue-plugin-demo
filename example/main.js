import MyComponent from 'main/index.js'
import Vue from 'vue'

Vue.use(MyComponent)

new Vue({
    render(h) {
        return h('my-component')
    }
}).$mount('#app')
