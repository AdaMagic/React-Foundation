// 组件通信-4
// 兄弟组件
// 状态提升机制：A -> 父组件 -> B

import { useState } from "react";

function A({ onGetAmag }) {
  const aMsg = "this is A msg";
  return <button onClick={() => onGetAmag(aMsg)}>send A msg</button>;
}
function B(props) {
  return <div>{props.val}</div>;
}
function App() {
  const [msg, setMsg] = useState("");
  const getAmsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };
  return (
    <div className="App">
      this is app
      <A onGetAmag={getAmsg}></A>
      <B val={msg}></B>
    </div>
  );
}

export default App;
