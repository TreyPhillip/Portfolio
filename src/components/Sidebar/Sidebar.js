import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaWrench, FaBars, FaInfo, FaHome } from 'react-icons/fa';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        collapsed: this.props.collapsed,
        toggled: this.props.toggled,
        };
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
                    }}>
                    <FaBars onClick={() => this.props.handleToggleSidebar(true)} />
                </div>
                </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="circle">
                            <MenuItem icon={<FaHome />}>
                                Home
                                <Link to="/"></Link>
                            </MenuItem>
                            <MenuItem icon={<FaInfo />}> 
                                About me
                                <Link to="/About"></Link>
                            </MenuItem>
                            <MenuItem icon={<FaWrench />}> 
                                Projects
                                <Link to="/Projects"></Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>             
                </ProSidebar>
                </div>
        );
    }
}

export default Sidebar;