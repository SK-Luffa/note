# Callback Hook
函数名： useCallback

用于得到一个固定引用值的函数，通常用它进行性能优化

useCallback:
   该函数有两个参数：

 1. 函数，useCallback会固定该函数的引用，只要依赖项没有发生变化，则始终返回之前函数的地址
 2. 数组，记录依赖项
   
   该函数返回：引用相对固定的函数地址


这个函数和 useEffect十分相像，可以尝试Effect，虽然这样做比较奇葩，但是确实uesEffect 返回的也是最初的函数引用地址