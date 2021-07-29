import React from "react";
import Logo from "./Logo";
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Logo/>
                <div className="content">
                    <nav>

                            <Link activeStyle={{
                                color: "red",
                                fontWeight: 700
                            }} exact={true} activeClassName="active" to='/'>Home page</Link>
                        <Link activeStyle={{
                            color: "red",
                            fontWeight: 700
                        }} exact={true} activeClassName="active" to=''>About us</Link>
                        <Link activeStyle={{
                            color: "red",
                            fontWeight: 700
                        }} exact={true} activeClassName="active" to=''>Gallery</Link>
                        <Link activeStyle={{
                            color: "red",
                            fontWeight: 700
                        }} exact={true} activeClassName="active" to=''>Share regulation</Link>
                        <Link activeStyle={{
                            color: "red",
                            fontWeight: 700
                        }} exact={true} activeClassName="active" to=''>Price</Link>
                        <Link activeStyle={{
                            color: "red",
                            fontWeight: 700
                        }} exact={true} activeClassName="active" to=''>Our fleet</Link>
                        <Link activeStyle={{
                            color: "red",
                            fontWeight: 700
                        }} exact={true} activeClassName="active" to=''>Our clients</Link>
                        <Link activeStyle={{
                            color: "red",
                            fontWeight: 700
                        }} exact={true} activeClassName="active" to='#contact'>Contact</Link>
                    </nav>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
