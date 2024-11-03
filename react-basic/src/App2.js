import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const handleCount = () => {
    // 直接修改 无法触发视图改变
    // count++;
    // console.log(count);
    setCount(count + 1);
  };

  // 修改对象
  let [form, setForm] = useState({ name: "Jack" });
  const changeForm = () => {
    // 错误：直接修改
    // form.name = "haha";

    //正确:setForm 传入一个全新的对象
    setForm({
      ...form,
      name: "haha",
    });
  };
  return (
    <div>
      <button onClick={handleCount}>{count}</button>
      <button onClick={changeForm}>修改对象{form.name}</button>
    </div>
  );
}

export default App;
