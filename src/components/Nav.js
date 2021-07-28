import React from "react";
import {Link} from "gatsby";

const Nav = () => {
    return (
        <>
            <nav>
                <Link activeStyle={{
                    color: "deepskyblue",
                    fontWeight: 700
                }} exact={true} activeClassName="active" to='/'>Home</Link>
                <Link activeStyle={{
                    color: "deepskyblue",
                    fontWeight: 700
                }} to='#blog'>Blog</Link>
                <Link activeStyle={{
                    color: "deepskyblue",
                    fontWeight: 700
                }} to='#service'>Service</Link>
                <Link activeStyle={{
                    color: "deepskyblue",
                    fontWeight: 700
                }} to='#contact'>Contact</Link>

            </nav>
        </>
    )
};

export default Nav;
