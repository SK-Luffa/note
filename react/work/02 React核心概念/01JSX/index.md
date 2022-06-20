# JSX

## 什么是JSX

- facebook起草的JS扩展语法
- 本质是一个JS对象，会被babel编译，最终会转换为React.createElement
- 每个JSX表达式，有且仅有一个根节点

    - React.Fragment

    - "<></>" 由于jsx必须只能存在一个根节点，所以我们可以采用 "<></>" 这种方式 "<></>"在代码中不会体现出任何效果， 简而言之，他甚至比div还要简洁，div本身还会体现在html当中，而 "<></>"则根本不会存在html当中，它的存在只是为了满足 JSX本身必须只能有一个根节点的硬性条件

    - "<></>"实际上在JSX当中是"<React.fragment></React.fragment>" 


- 每个JSX元素必须结束（XML规范）
   * 两种写法： 例: img
   *  <img></img>  ---</img> 结束标签
   *   <img/>     ---- / 自结束

## 在JSX中嵌入表达式
   - 在jsx当中使用注释：{/**/}
   -  在jsx当中是可以直接写js语法的 "{}" 这个就相当于vue当中的{{}}或模板字符串当中的${}
      - 原理： const div=React.getElement("div",{},`${a}*${b}=${a*b}`)

- 表达式作为内容的一部分
    - null、undefined、false不会显示 但并非判定结果为false的不显示 例如："0"
    - 普通对象，不可以作为子元素
    - 但是可以放react元素对象 例如 <span></span>
    - 如果放置数组，那么会将数组直接进行遍历放置

    - “let lis=numbers.map((item,i)=>(<li key={i}>{i}</li>));”
- 将表达式作为元素属性
- 属性使用小驼峰命名法
  例如：class =className
  <img src={} className={} style={{marginLeft:"50px",top:"10px"}} alt=""/>
- 防止注入攻击
    - 自动编码
    - dangerouslySetInnerHTML
      例如 const a="<h1>asjdlkaldjskla<h1>"

  cosnt b=<div>{a}</div>-----这个时候a将会被作为文本信息注入到b当中也就是说 h1此时并不属于标签而是文本

  为了防止XSL注入攻击 如果确实需要这种操作，请在被注入的元素上添加 dangerouslySetInnerHTML
  例如： cosnt b=<div  dangerouslySetInnerHTML={{__html:a}}> </div>
 