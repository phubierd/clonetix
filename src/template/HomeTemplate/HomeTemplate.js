// import React, { Fragment } from 'react'
// import 'antd/dist/antd.css';
// import './HomeTemplate.css';
// import { Layout, Menu } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import Header from 'components/Header/Header'
// import Footer from 'components/Footer/Footer'
// import { Route } from 'react-router-dom';
// export default function HomeTemplate(props) {

//     const { Header, Content,  Sider } = Layout;

//     return (
//         <Route path={props.path} exact render={(propsRoute) => {
//             return <Layout>
//                 <Sider
//                     breakpoint="lg"
//                     collapsedWidth="0"
//                     onBreakpoint={broken => {
//                         console.log(broken);
//                     }}
//                     onCollapse={(collapsed, type) => {
//                         console.log(collapsed, type);
//                     }}
//                 >
//                     <div className="logo" />
//                     <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//                         <Menu.Item key="1" icon={<UserOutlined />}>
//                             nav 1
//                         </Menu.Item>
//                         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//                             nav 2
//                         </Menu.Item>
//                         <Menu.Item key="3" icon={<UploadOutlined />}>
//                             nav 3
//                         </Menu.Item>
//                         <Menu.Item key="4" icon={<UserOutlined />}>
//                             nav 4
//                         </Menu.Item>
//                     </Menu>
//                 </Sider>
//                 <Layout>
//                     <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//                     <Content style={{ margin: '24px 16px 0' }}>
//                         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//                             <props.component {...propsRoute} />
//                         </div>
//                     </Content>

//                      <Footer/>
//                 </Layout>
//             </Layout>




//             {/* <Header />

                
//                 <Footer /> */}

//         }} />

//     )
// }
