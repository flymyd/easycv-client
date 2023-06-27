import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {childRouter} from "@/router/index.jsx";
import {Layout, Nav} from "@douyinfe/semi-ui";

const {Sider, Content} = Layout;
const Framework = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const onClickNav = (e) => {
    navigate(e.itemKey, {replace: true})
  }
  const menuItems = childRouter.map(v => ({...v, itemKey: '/' + v.path}))
  const contentStyle = {
    background: 'F5F5F5',
    padding: 24,
    minHeight: 280,
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={true}>
        <Nav style={{minHeight: '100vh'}} theme="dark" mode="vertical" defaultIsCollapsed defaultSelectedKeys={[location.pathname]}
             onClick={onClickNav}
             items={menuItems}/>
      </Sider>
      <Layout>
        <Content style={contentStyle}>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Framework;