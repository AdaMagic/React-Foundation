// react中获取DOM

// 1.useRef生成ref对象，绑定到dom标签上
// 2.dom可用时，用ref.current获取dom
// 渲染完毕后，dom生成才可用
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const showDom = () => {
    console.log(inputRef.current);
  };
  return (
    <div className="App">
      <input type="text" ref={inputRef} />

      <button onClick={showDom}>获取dom</button>
    </div>
  );
}

export default App;
