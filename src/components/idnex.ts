import wyaMessage from './message/wyaMessage.vue'
import {App} from 'vue'
export default {
    install(app:App){
      app.component('wyaMessage',wyaMessage)
    }
}