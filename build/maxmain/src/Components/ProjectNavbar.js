import '../stylesheets/projectNavbar.css'
import React from 'react';
import { Link } from "react-router-dom";


function ProjectNavbar() {
    return (
        <div className="navbar">
            <ul className="navbar-item">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <li className="navbar-text">Home</li>
                </Link>
            </ul>
            <ul className="navbar-item">
                <Link to='/RLAgents' style={{textDecoration: 'none'}}>
                    <li className='navbar-text'>RLAgents</li>
                </Link>
            </ul>
            {/*<ul className="navbar-item">*/}
            {/*    <Link to='/PacmanProjects' style={{textDecoration: 'none'}}>*/}
            {/*        <li className='navbar-text'>PacmanProjects</li>*/}
            {/*    </Link>*/}
            {/*</ul>*/}
        </div>
    )
}

export default ProjectNavbar