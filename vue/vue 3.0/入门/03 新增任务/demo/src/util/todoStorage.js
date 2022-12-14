const LocaL_KEY="todomvc"
// 生成一个唯一编号 时间戳+4位随机数
export function generateId(){
   return Date.now()+Math.random().toString(16).substr(2,4)
}
// 获取目前所有的任务
export function fetch (){
  const result=  localStorage.getItem(LocaL_KEY )

  if (result !== "undefined"){
      return JSON.parse(result)
  }
  return []

}

//保存所有任务  todos:任务列表

export function save(todos){
    localStorage.setItem(LocaL_KEY,JSON.stringify(todos ))
}
export function filter(todos,visibility="all"){
  if(visibility=="all"){
    return todos
  }else if(visibility=="active"){
    return todos.filter(it=>!it.completed)
  }else if(visibility=="comleted"){
    return todos.filter(it => it.completed)
  }
  throw new Error("异常，visibility传入一场")
}