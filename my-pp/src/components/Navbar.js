import React from 'react'
import logo from './Assets/logo.png';
import { Link } from 'react-router-dom';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
export const Navbar = ({show}) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
            <li>
                <Link to='/'>
                    <TbLayoutDashboardFilled />
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to='/records'>
                    <IoIosPeople />
                    Records
                </Link>
            </li>
            <li>
                <Link to='/calendar'>
                    <FaCalendarAlt />
                    Calendar
                </Link>
            </li>
            <li>
                <a href='/login'>
                    Logout
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
