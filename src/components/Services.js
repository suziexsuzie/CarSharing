import React from "react";
import ServiceWindow from "./ServiceWindow";

const Services = () => {
    return (
        <section className="service">
            <div className="container">
                <h1 className="subtitle">Service</h1>
                <div className="content">
                    <ServiceWindow/>
                    <ServiceWindow/>
                    <ServiceWindow/>
                    <ServiceWindow/>
                </div>
            </div>
        </section>
    )
}

export default Services;