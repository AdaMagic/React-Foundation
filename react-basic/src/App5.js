// 组件通信-2
// 父传子 特殊的prop children
// 当把内容嵌套在子组件标签中时，父组件会自动在名为children的prop属性中接收
function Son(props) {
  console.log(props); // 看打印
  return <div>this is son,{props.children}</div>;
}
function App() {
  return (
    <div className="App">
      <Son>
        <span>this is span</span>
      </Son>
    </div>
  );
}

export default App;
