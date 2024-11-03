// 组件通信-3
// 子传父
// 父组件向子组件传一个函数，通过函数的回调拿到子组件的值
import { useState } from "react";

function Son({ onGetSonMsg }) {
  const sonMsg = "this is son msg";
  return <button onClick={() => onGetSonMsg(sonMsg)}>sendSonMsg</button>;
}
function App() {
  const [msg, setMsg] = useState("");
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };
  return (
    <div className="App">
      this is App
      <br />
      {msg} <br />
      <Son onGetSonMsg={getMsg} />
    </div>
  );
}

export default App;
