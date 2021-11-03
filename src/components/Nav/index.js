import React from "react";

function Nav() {
    return(
        <header>
        <div className="heading">
            <h1>
                BRIAN WILDE
            </h1>
            <h4>
                full stack developer
            </h4>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">My Work</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1y3L7uOxEYj_0iuOlmdFtZvr5tWiVF6uV/view?usp=sharing" target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav;