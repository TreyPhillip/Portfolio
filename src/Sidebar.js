import React, { Component } from "react";
import logo from './logo.svg';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
} from 'react-pro-sidebar';
import './styles/App.scss';
import { FaTachometerAlt, FaBars, FaGem, FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        collapsed: this.props.collapsed,
        toggled: this.props.toggled,
        };
        //this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    }

    render() {
        return (
            <div className={`app  ${this.state.toggled ? 'toggled' : ''}`}>
            <ProSidebar
                collapsed={this.props.collapsed}
                toggled={this.props.toggled}
                breakPoint="md"
                onToggle={this.props.handleToggleSidebar}
            >
                <SidebarHeader onClick={() => this.props.handleToggleSidebar(this.props.toggled)}>
                <div
                    style={{
                    padding: '30px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    }}
                >
                    <FaBars onClick={() => this.props.handleToggleSidebar(this.props.toggled)} />
                </div>
                </SidebarHeader>

                <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                    icon={<FaTachometerAlt />}
                    
                    >
                    dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}> components</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                    suffix={<span className="badge yellow">3</span>}
                    title='withSuffix'
                    icon={<FaRegLaughWink />}
                    >
                    <MenuItem>submenu 1</MenuItem>
                    <MenuItem>submenu 2</MenuItem>
                    <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu
                    prefix={<span className="badge gray">3</span>}
                    title="withPrefix"
                    icon={<FaHeart />}
                    >
                    <MenuItem>submenu 1</MenuItem>
                    <MenuItem>submenu 2</MenuItem>
                    <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu title="multilevel" icon={<FaList />}>
                    <MenuItem>submenu 1 </MenuItem>
                    <MenuItem>submenu 2 </MenuItem>
                    <SubMenu title={`$submenu 3`}>
                        <MenuItem>submenu 3.1 </MenuItem>
                        <MenuItem>submenu 3.2 </MenuItem>
                        <SubMenu title={`$submenu 3.3`}>
                        <MenuItem>submenu 3.3.1 </MenuItem>
                        <MenuItem>submenu 3.3.2 </MenuItem>
                        <MenuItem>submenu 3.3.3 </MenuItem>
                        </SubMenu>
                    </SubMenu>
                    </SubMenu>
                </Menu>
                </SidebarContent>
            </ProSidebar>
            </div>
        );
    }
}

export default Sidebar;