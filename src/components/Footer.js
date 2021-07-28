import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Logo/>
                <div className="content">
                    <nav>
                        <ul>
                            <li><a href="#main">Home page</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Share regulation</a></li>
                            <li><a href="">Price</a></li>
                            <li><a href="">Our fleet</a></li>
                            <li><a href="">Our clients</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
