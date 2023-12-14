import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
function Category() {
    return (
        <Layout>
            <Header/>
            <div className="container">
                <section id="food">
                    <h2>Types of food</h2>

                    <div className="food-container container">
                        <div className="food-type fruite">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>fruite</h3>
                                    <a href="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                        <div className="food-type vegetable">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>vegetable</h3>
                                    <a href="https://en.wikipedia.org/wiki/Vegetable" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                        <div className="food-type grin">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>grin</h3>
                                    <a href="https://en.wikipedia.org/wiki/Grain" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>  &nbsp; &nbsp;</div>
                    <div className="food-container container">
                        <div className="food-type fruite1">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/K8byPvXh/meat.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>Grilled Meat </h3>
                                    <a href="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                        <div className="food-type vegetable2">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/c1VWJBXH/seafish.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>Sea Fish</h3>
                                    <a href="https://en.wikipedia.org/wiki/Vegetable" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                        <div className="food-type grin3">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/XYt1fsBG/pig.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>Pig meat</h3>
                                    <a href="https://en.wikipedia.org/wiki/Grain" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>  &nbsp; &nbsp;</div>
                    <div className="food-container container">
                        <div className="food-type fruite1">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/jS92VxX1/icecreame.png" alt="error"/>
                                <div className="img-content">
                                    <h3>Ice cream </h3>
                                    <a href="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                        <div className="food-type juice">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/Dyv8LY0x/desktop-wallpaper-juice-fruit-food-drink.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>Juice</h3>
                                    <a href="https://en.wikipedia.org/wiki/Vegetable" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                        <div className="food-type egg">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/BZcj8GS8/bacon-egg-tomato-salad-wallpaper-preview.jpg" alt="error"/>
                                <div className="img-content">
                                    <h3>Egg</h3>
                                    <a href="https://en.wikipedia.org/wiki/Grain" className="btn btn-primary"
                                       target="blank">learn
                                        more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export default Category;