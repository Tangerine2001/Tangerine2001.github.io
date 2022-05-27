import './projectNavbar.css'
import React from 'react';
import { Link } from "react-router-dom";


function ProjectNavbar() {
    return (
        <div className="navbar">
            <ul className="navbar-item">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <li className="navbar-title">Home</li>
                </Link>
            </ul>
        </div>
    )
}

// class NavItem extends React.Component {
//     state = {
//         showBox: false
//     };
//
//     handleBoxToggle = () => this.setState({showBox: !this.state.showBox});
//
//     render() {
//         return (
//             <div className="navbar-item">
//                 <div className="navbar-title" onMouseEnter={this.handleBoxToggle} onMouseLeave={this.handleBoxToggle}>
//                     <h3>Home</h3>
//                 </div>
//                 <div className={`navbar-cover${this.state.showBox? '-show' : ''}`}>
//                     <ul>
//                         <li>stuff</li>
//                         <li>stuff</li>
//                     </ul>
//                     stuff stuff stuff stuff stuff stuff stuff
//                 </div>
//             </div>
//         );
//     }
// }

export default ProjectNavbar