import { LogoutOutlined, Menu } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


function Navbar({ setToggled, toggled }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const logoff = () => {
        sessionStorage.clear();
        window.location.href = "/";
    }
    return (
        <navbar className="bg-primary d-flex justify-content-between align-items-center px-md-4 px-2 py-2">
            <div>
                <button className='btn text-white d-block d-md-none' onClick={() => setToggled(!toggled)}>
                    <Menu />
                </button>
            </div>
            <div className=''>

                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle><Avatar>AD</Avatar></DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Profile</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={logoff}><LogoutOutlined /> Log out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

        </navbar>
    )
}

export default Navbar