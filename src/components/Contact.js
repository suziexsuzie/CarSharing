import React from "react";

const Contact = () => {
    const handleSubmit = () => {
        if (document.getElementById('agree').checked) {
            alert('Your message has been sent successfully');
            return true;

        } else {
            alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy');
            return false;
        }
    }
    return (
        <section className="contact" id="#contact">
            <div className="container">
                <div className="content">
                    <div className="img"/>
                    <form action="#"
                          onSubmit={handleSubmit}
                          style={{
                              display: `flex`,
                              flexDirection: `column`,
                              width: `50%`
                          }}>
                        <input type="text" id="name" name="name" placeholder="Type your name"/>
                        <input type="email" id="email" name="email" placeholder="Type your e-mail"/>
                        <textarea
                            style={{
                                height: `150px`,
                            }}
                            name="body"
                            id="body"
                            placeholder="Type your message"/>
                        <div className="terms"><input type="checkbox" id="agree" value="check" name="terms"/>
                            <label for="agree">I hereby give consent for my personal data included in my application to
                                be processed for the purposes of the recruitment process under the European Parliament’s
                                and Council of the European Union Regulation on the Protection of Natural Persons as of
                                27 April 2016, with regard to the processing of personal data and on the free movement
                                of such data, and repealing Directive 95/46/EC (Data Protection Directive)</label>
                        </div>
                        <input type="submit" id="submit" name="submit" value="submit" className="btn"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
