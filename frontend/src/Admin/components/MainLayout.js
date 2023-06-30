import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { AiOutlineDashboard, AiOutlineBackward } from 'react-icons/ai';
import { FaBloggerB, FaHotel } from 'react-icons/fa';
import { MdBedroomParent } from 'react-icons/md';
import { LuClipboardList } from 'react-icons/lu';
import { BiCategory } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import './index.css';
import { user } from '../utils/config';
import { Redirect }  from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

function MainLayout({children}) {
  
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  if(user === null || !user.isAdmin) return (<Redirect to="/" replace/>);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='pt-0'>
      <Sider trigger={null} collapsible collapsed={collapsed} className="h-auto">
        <div className="logo-admin">
          {collapsed ?
            <div className='text-white text-center py-3 fs-5'>B4T</div>
            :
            <div className='text-white text-center py-3 fs-5'>Booking4T</div>
          }
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/api']}
          onClick={({ key }) => {
            if (key === "logout") {

            } else {
              history.push(key);
            }
          }}
          items={[
            {
              key: '/api',
              icon: <AiOutlineDashboard className="fs-4" />,
              label: 'Dashboard',
            },
            {
              key: '/api/user/admin',
              icon: <UserOutlined className="fs-4" />,
              label: 'User',
            },
            {
              key: '/api/catalog/admin',
              icon: <BiCategory className="fs-4" />,
              label: 'Catalog',
              children: [
                {
                  key: '/api/place/admin',
                  icon: <FaHotel className="fs-4" />,
                  label: 'Place'
                },
                {
                  key: '/api/room/admin',
                  icon: <MdBedroomParent className="fs-4" />,
                  label: 'Room'
                },
              ]
            },
            {
              key: '/api/blog/admin',
              icon: <FaBloggerB className="fs-4" />,
              label: 'Blog',
            },
            {
              key: '/api/book',
              icon: <LuClipboardList className="fs-4" />,
              label: 'Order',
            },
            {
              key: '/',
              icon: <AiOutlineBackward className='fs-4'/>,
              label: 'Back'
            }
          ]}
        />
      </Sider>
      <Layout className='pt-0'>
        <Header
          className='d-flex justify-content-between ps-1 pe-3'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <div className='admin-box-container'>
            <div className="row">
              <div className="col col-md-auto position-relative d-flex justify-content-end" style={{ cursor: 'pointer' }}>
                <IoIosNotifications className="fs-2 mt-4" />
                <span className='badge bg-warning rounded-circle p-1 position-absolute' style={{ top: '20px', right: '10px' }}>3</span>
              </div>
              <div className="col col-md-auto">
                <UserOutlined className="fs-2" />
              </div>
              <div className="col col-md-auto">
                <h6 className='mt-2'>{user.username}</h6>
                <h6>{user.email}</h6>
              </div>
              <div className='col col-md-auto dropdown'>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1 z-2"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/account"
                    >
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-1 mb-1 z-2"
                      style={{ height: "auto", lineHeight: "20px" }}
                      to="/logout"
                    >
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout >
  );
};

export default MainLayout