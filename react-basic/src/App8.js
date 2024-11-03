// 组件通信-5
// 跨层级组件
/* 
1.通过createContext方法创建一个上下文对象
2.顶层组件，通过Provider组件提供数据
3.底层组件，通过useContext钩子函数接收数据
*/
import { createContext, useContext } from "react";
const MsgContext = createContext();
function A() {
  return (
    <div>
      A组件
      <B />
    </div>
  );
}
function B() {
  const name = useContext(MsgContext);
  return <div>B组件,获取的msg:{name}</div>;
}
function App() {
  const msg = "this is app msg";
  return (
    <div className="App">
      <MsgContext.Provider value={msg}>
        this is app
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
