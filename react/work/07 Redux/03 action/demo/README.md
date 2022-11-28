# Action

1. action是一个palin-object （平面对象）
     1. 它的__proto__必须指向Object.prototype
2. 通常使用payload属性表示附加数据（没有强制要求）
3. action中必须有type属性(属性名不可改变！！！)，该属性用于描述操作的类型
    1. 但是没有对type的类型做要求 
4. 在大型项目中，由于操作类型非常多，为了避免硬编码（hard code）,会将action的类型存放到一个或一些单独的文件中。(样板代码)
5. 为了方便传递action，通常会使用action创建函数来创建action  
    1. action创建函数应为无副作用的纯函数  
       1.  不能有任何形式改动参数
       2.  不可以有异步操作
       3.  不可以对外部环境中的数据造成影响 
6. 为了方便利用action创建函数来分发（触发）action，redux提供了一个函数 ```bindActionCreators```，该函数用于增强action创建函数的功能，使它不仅可以创建action，并且创建后可以自动完成分发 