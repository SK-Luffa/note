import {reactive,readonly} from "vue"
const state=reactive({a:1,b:2})

window.state=state
 const imState=readonly({ a: 1, b: 2 })
window.imState = imState