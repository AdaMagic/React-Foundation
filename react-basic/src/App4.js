// 组件通信-1
// 父传子
// 父组件传递值，子组件标签上绑定属性
// 子组件接收值，props参数接收，props是对象
function Son(props) {
  //props:对象包含所有父组件传递的数据,可传递任意的数据，子组件props只读，只能由父组件修改
  console.log("props", props);

  return <div>this is son,{props.name}</div>;
}

function App() {
  const name = "this is app name";
  return (
    <div className="App">
      <Son
        name={name}
        age={18}
        isTrue={false}
        list={["vue", "react"]}
        obj={{ name: "Ada" }}
        cb={() => console.log(123)}
        child={<span>this is JSX</span>}
      />
    </div>
  );
}

export default App;
