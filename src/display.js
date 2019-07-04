import React from 'react'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
export default function Display() {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <Link to="/add">Add</Link>
                </Menu.Item>
                <Menu.Item key="apps" >
                    <Link to="/gallery">Gallery</Link>
                </Menu.Item>

            </Menu>
        </div>

    )
}
