import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
function Contact() {
    return (
        <Layout>
            <Header/>
            <div className="container">
                <section id="contact">
                    <div className="contact-container container">
                        <div className="contact-img">
                            <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt=""/>
                        </div>
                        <div className="form-container">
                            <h2>Contact Us</h2>
                            <input type="text" placeholder="Your Name"/>
                            <input type="email" placeholder="E-Mail"/>
                            <textarea cols="30" rows="6" placeholder="Type Your Message"></textarea>
                            <a href="#" className="btn btn-primary">Submit</a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export default Contact;