import React, { useState } from "react";
const Navbar = () => {
    const [showmenu, setshowmenu] = useState(false)
    const Event = () => {
        setshowmenu(!showmenu)
    }
    return (<>
        <div className="navbar">
            <div className="logo">
                <h1>WebDev</h1>
            </div>
            <div className="section">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="social_media">
                <a href="#">
                    <img src="social-media-5995251 (1).png" className="socialimg" />
                </a>
            </div>
            <div className="hamberger_menu">
                <a href="#" onClick={Event}>
                    <img src="Hamberger_menu.png" className="hamberimg" />
                </a>
            </div>
        </div>
        {showmenu ? <div className="mobile_menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div> : null}

    </>)
}
export default Navbar   