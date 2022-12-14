import { ref, watchEffect } from "vue"
import * as todoStorage from "../util/todoStorage"
export default function useTodoList() {
    const todusRef = ref(todoStorage.fetch())
    window.todusRef=todusRef
    watchEffect(() => {
        todoStorage.save( todusRef.value)
    })

    return {
        todusRef
    }
}