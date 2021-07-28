import * as React from "react"

import "../scss/main.scss";
import Header from "../components/Header";
import Blog from "../components/Blog";
import CallTA from "../components/CallTA";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const IndexPage = () => {
    return (<>
            <Header/>
            <CallTA/>
            <Blog />
            <Services />
            <Contact />
            <Footer />
        </>

    )
}

export default IndexPage
