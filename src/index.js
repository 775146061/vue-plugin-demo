import MyComponent from './my-component.vue'
import Vue from 'vue'

const plugin = {
    install: function(Vue, options) {
        Vue.component(MyComponent.name, MyComponent)
    }
}

export default plugin
