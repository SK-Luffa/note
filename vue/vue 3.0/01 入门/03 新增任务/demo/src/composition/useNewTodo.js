import { ref } from "vue"
import { generateId } from "../util/todoStorage"
export default function uesNewTodo(todusRef) {
    const newTodoRef = ref("")//表示新任务的标题 
    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim()
        if (!value) {
            return;
        }
        console.log("新增", value);
        // 生成一个任务对象，将其加入到任务列表中
      const todo={
          id:generateId(), 
          titile:value,
          completed:false 
      }
      debugger
      todusRef.value.push(todo) 
        newTodoRef.value=""
    }
    return {
        newTodoRef,
        addTodo
    }
}