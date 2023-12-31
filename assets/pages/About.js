import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
function About() {
    return (
        <Layout>
            <Header/>
            <div className="container">
                <section id="about">
                    <div className="about-wrapper container">
                        <div className="about-text">
                            <p className="small">About Us</p>
                            <h2>We've beem making healthy food last for 10 years</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
                                eos omnis, nobis dignissimos perferendis et officia architecto,
                                fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
                                maiores praesentium soluta alias asperiores saepe commodi
                                consequatur? Perferendis est placeat facere aspernatur!
                            </p>
                        </div>
                        <div className="about-img">
                            <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food"/>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export default About;