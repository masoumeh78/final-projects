import React, { useState } from 'react';

import './TopMenu.css';

import type { MenuProps } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
      //---------------------------------- Home ---//
      label: (
        <Link to="/">Home</Link>
      ),
      key: 'Home',
      // icon: <MailOutlined />,
      // disabled: true,
    },
    {
      //---------------------------------- Todos ---//
      label: (
        <Link to="/Todo-App">Todos</Link>
      ),
      key: 'Todos',
      // icon: <AppstoreOutlined />,
      // disabled: true,
    },
    {
      //---------------------------------- Notes ---//
      label: (
        <Link to="/Note-App">Notes</Link>
      ),
      key: 'Notes',
      // icon: <AppstoreOutlined />,
      // disabled: true,
    },
    {
      //---------------------------------- Exchnage ---//
      label: (
        <Link to="/Exchange-App">Exchnage</Link>
      ),
      key: 'Exchnage',
    },
    {
      //---------------------------------- Weather ---//
      label: (
        <Link to="/Weather-App">Weather</Link>
      ),
      key: 'Weather',
    },

    // {
      //---------------------------------- Submenu ---//
    //   label: 'Navigation Three - Submenu',
    //   key: 'SubMenu',
    //   icon: <SettingOutlined />,
    //   children: [
    //     {
    //       type: 'group',
    //       label: 'Item 1',
    //       children: [
    //         {
    //           label: 'Option 1',
    //           key: 'setting:1',
    //         },
    //         {
    //           label: 'Option 2',
    //           key: 'setting:2',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'group',
    //       label: 'Item 2',
    //       children: [
    //         {
    //           label: 'Option 3',
    //           key: 'setting:3',
    //         },
    //         {
    //           label: 'Option 4',
    //           key: 'setting:4',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

const TopMenu=()=>{
    
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    )
}
export default TopMenu;
