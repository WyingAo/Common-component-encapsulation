import { h,render} from 'vue'
import wyaMessage from './wyaMessage.vue'
type Props = {
    type:'success' | 'error' | 'warning' 
    text:string
    duration:number
}
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-container')
document.body.appendChild(div)
export default function Message({type,text,duration=2000}:Props){
    const vNode = h(wyaMessage,{type,text,duration},text)
    render(vNode,div)
    setTimeout(() => {
        render(null, div)
      }, duration)
}
Message.error = function (text: string, duration = 2000) {
    Message({
      type: 'error',
      text,
      duration,
    })
  }
  Message.success = function (text: string, duration = 2000) {
    Message({
      type: 'success',
      text,
      duration,
    })
  }
  Message.warning = function (text: string, duration = 2000) {
    Message({
      type: 'warning',
      text,
      duration,
    })
  }