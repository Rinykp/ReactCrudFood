import React, {useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const pageLinks = [
        {
            "name": "Home",
            "url" :"/",
        },
        {
            "name": "About",
            "url" :"/about",
        },
        {
            "name": "Category",
            "url" :"/category",
        },
        {
            "name": "Menu",
            "url" :"/menu",
        },
        {
            "name": "Testimonial",
            "url" :"/testimonial",
        },
        {
            "name": "Contact",
            "url" :"/contact",
        },
        {
            "name": "Admin",
            "url" :"/admin",
        },
        {
            "name": "Register",
            "url" :"/register",
        },
        {
            "name": "Login",
            "url" :"/login",
        },
        {
            "name": "Dashboard",
            "url" :"/dashboard",
        },

    ];

    useEffect(() => {
        pageLinks.map((page)=>{
            if(page.url == location.pathname) {
                document.title = page.name;
            }
        });
    }, [])

    return (
        <nav class="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-container container">
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" class="menu-items">
                    <ul className="navbar-nav mr-auto">
                        {
                            pageLinks.map((page, key) => {
                                return (
                                    <li key={key} className={`nav-item ${location.pathname == page.url ? 'active' : ''}`}>
                                        <Link to={page.url} className="nav-link">{page.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;