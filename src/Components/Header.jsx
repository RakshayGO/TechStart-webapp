import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.scss'
import { HashLink } from "react-router-hash-link";
function Header() {
  return (
    <nav>
        <h1>TechStar</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <Link to={"/services"}>Services</Link>
            <HashLink to ={"/#brands"}>Brands</HashLink>
            <Link to={"/order"}>Order</Link>
        </main>
    </nav>
  )
}

export default Header