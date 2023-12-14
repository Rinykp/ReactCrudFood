import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import {Link} from "react-router-dom";
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://postimg.cc/9r5hWgdR',
    imageSize: 190,
};
function Home() {
    return (
        <Layout>
            <Header/>
            <div className="container">

                <section className="showcase-area" id="showcase">

                <div className="showcase-container">
                    <h1 className="main-title" id="home">Eat Right Food</h1>
                    <p>Eat Healty, it is good for our health.</p>
                    {/*<a href="#food-menu" className="btn btn-primary">Menu</a>*/}
                    <Link
                        to={`/menu}`}
                        className="btn btn-info mx-1">
                        Menu
                    </Link>
                </div>
                </section>
            </div>

        </Layout>
    );
}
export default Home;