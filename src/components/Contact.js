import React from "react";

const Contact = () => {
    return (
        <section className="contact" id="#contact">
            <div className="container">
                <div className="content">
                    <div className="img"></div>
                    <form action="#"
                          onSubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); return false; }">
                        <input type="text" id="name" name="name" placeholder="Type your name"/>
                        <input type="email" id="email" name="email" placeholder="Type your e-mail"/>
                        <input type="textarea" id="message" name="message" placeholder="Type your message"/>
                        <input type="checkbox" id="agree" value="check" name="terms"/>
                        <input type="submit" id="submit" name="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
