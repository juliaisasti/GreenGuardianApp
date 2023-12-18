import React from "react";
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Nav = () => {
  return (
    <nav>
        <ul className="nav-bar"> 
            <li><Button variant='ghost'><Link to='/'>Home</Link></Button></li>
            <li><Button variant='ghost'><Link to='/search'>Search</Link></Button></li>
            <li><Button variant='ghost'><Link to='/profile'>Profile</Link></Button></li>
        </ul >
    </nav >
)
};
;

export default Nav;
