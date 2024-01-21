import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, menuClasses } from 'react-pro-sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';



function SideMenu() {

    const [toggled, setToggled] = useState(false);
    const { pathname } = useLocation();

    const Menuoptions = [
        {
            title: "Dashboard",
            link: "/dashboard",
            icon: ""
        }
    ]

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="md"
                backgroundColor="#1F618D"
            >
                <Menu>
                    <MenuItem rootStyles={{
                        ['.' + menuClasses.button]: {
                            backgroundColor: '#1F618D',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#1F618D',
                            },
                        },
                    }}
                        component={<h2 className='title text-white text-center m-0'>Logo</h2>}
                    >
                        Logo
                    </MenuItem>

                    {
                        Menuoptions.map(item => (
                            <MenuItem rootStyles={{
                                ['.' + menuClasses.button]: {
                                    backgroundColor: '#fff',
                                    color: '#1F618D',
                                    '&:hover': {
                                        color: '#1F618D',
                                    },
                                },
                            }}
                                active={Boolean(pathname === item.link)}
                            >
                                {item.title}
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Sidebar>
            <main className='w-100'>

                <Navbar setToggled={setToggled} toggled={toggled} />
                <Outlet />
            </main>
        </div>
    )
}

export default SideMenu;