import "./App.css";
// 获取store中的数据，使用hook函数： useSelector 
// 修改store中的数据需要借助 hook函数：useDispatch,它的作用是生成提交action对象的dispatch函数
import { useDispatch, useSelector } from "react-redux";
// 如何得到要提交的action对象? 执行store模块中导出的actionCreater方法
import { inscrement, decrement } from "./store/modules/counterStore";
function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(inscrement())}>+</button>
    </div>
  );
}

export default App;
