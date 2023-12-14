import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
function Menu() {
    return (
        <Layout>
            <Header/>
            <div className="container">
                <section id="food-menu">
                    <h2 className="food-menu-heading">Food Menu</h2>
                    <div className="food-menu-container container">
                        <div className="food-menu-item">
                            <div className="food-img">
                                <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt=""/>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile">Food Menu Item 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                    quae.
                                </p>
                                <p className="food-price">Price: &#8377; 250</p>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-img">
                                <img src="https://i.postimg.cc/sgzXPzzd/food-menu2.jpg" alt="error"/>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile">Food Menu Item 2</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                    quae.
                                </p>
                                <p className="food-price">Price: &#8377; 250</p>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-img">
                                <img src="https://i.postimg.cc/8zbCtYkF/food-menu3.jpg" alt=""/>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile">Food Menu Item 3</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                    quae.
                                </p>
                                <p className="food-price">Price: &#8377; 250</p>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-img">
                                <img src="https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg" alt=""/>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile">Food Menu Item 4</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                    quae.
                                </p>
                                <p className="food-price">Price: &#8377; 250</p>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-img">
                                <img src="https://i.postimg.cc/KYnDqxkP/food-menu5.jpg" alt=""/>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile">Food Menu Item 5</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                    quae.
                                </p>
                                <p className="food-price">Price: &#8377; 250</p>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-img">
                                <img src="https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg" alt=""/>
                            </div>
                            <div className="food-description">
                                <h2 className="food-titile">Food Menu Item 6</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                                    quae.
                                </p>
                                <p className="food-price">Price: &#8377; 250</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export default Menu;