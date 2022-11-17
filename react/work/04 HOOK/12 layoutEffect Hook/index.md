# LayoutEffect Hook

 useEffect: 浏览器渲染完成之后，用户看到新的渲染结果只后，才会运行

 useLayoutEffect:浏览器完成了dom改动，但是还没有呈现给用户 也就是说  LayououtEffect运行的时间点在useEffect之前

 应该尽量使用useEffect,因为它不会导致渲染阻塞，如果出现了问题，在考虑使用useLayoutEffectHook