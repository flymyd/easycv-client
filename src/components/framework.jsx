import {Layout, Menu, theme} from 'antd';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {childRouter} from "@/router/index.jsx";

const {Sider, Content} = Layout;
const Framework = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const onClickNav = (e) => {
    navigate(e.key, {replace: true})
  }
  const menuItems = childRouter.map(v => ({...v, key: '/' + v.path}))
  const contentStyle = {
    marginLeft: '12px',
    padding: 24,
    minHeight: 280,
    background: colorBgContainer,
  }
  return (
    <Layout>
      <Sider style={{minHeight: '100vh'}} trigger={null} collapsible collapsed={true}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} onClick={onClickNav}
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