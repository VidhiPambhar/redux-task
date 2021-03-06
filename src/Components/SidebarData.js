import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';

export const SidebarData = [
  
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Products',
    path: '/productlist',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'ContactUs',
    path: '/contact',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'AboutUs',
    path: '/about',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FiUserPlus/>,
    cName: 'nav-text'
  }
];

export const SidebarData1 = [
    {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Products',
    path: '/productlist',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'ContactUs',
    path: '/contact',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'AboutUs',
    path: '/about',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
   }
   //,{
  //   title: "Logout",
  //   path: '/login',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text',
  // },
  
  
];