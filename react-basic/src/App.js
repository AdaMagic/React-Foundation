// 自定义hook
// 封装思路
/**
 1.声明一个以use开头的函数
 2.函数体内封装可复用的逻辑
 3.在组件中用到的状态或回调return出去(以对象或数组)
 4.在哪个组件中用到就执行这个函数，结构出状态和回调进行使用

 */

import { useState } from "react";

// 不定义hook的写法
// function App() {
//   const [value, setValue] = useState(true);
//   return (
//     <div className="App">
//       {value && <div>this is app</div>}
//       <button onClick={() => setValue(!value)}>isShow</button>
//     </div>
//   );
// }

function useToggle() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  //   哪些状态和回调在其他组件中用到使用return
  return {
    value,
    toggle,
  };
}
function App() {
  const { value, toggle } = useToggle();
  return (
    <div className="App">
      {value && <div>this is app</div>}
      <button onClick={toggle}>isShow</button>
    </div>
  );
}

export default App;
