import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      登录页
      {/* 1. 声明式导航 */}
      <Link to="/Article">跳转到文章页</Link> <br />
      {/* 2. 命令式导航 */}
      <button onClick={() => navigate("/Article")}>跳转到文章页</button> <br />
      <button onClick={() => navigate("/Article?id=101&name=jack")}>
        searchParams传参
      </button>
      <br />
      {/* 在router文件中加占位符：id */}
      <button onClick={() => navigate("/Article/102")}>params传参</button> 
    </div>
  );
};

export default Login;
