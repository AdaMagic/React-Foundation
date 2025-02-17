import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div> 一级路由layout组件</div>
            <Link to='/board'>面板</Link>
            <Link to='/about'>关于</Link>
            {/* 配置二级路由出口 */}
            <Outlet></Outlet>
        </div>
    )
}
export default Layout