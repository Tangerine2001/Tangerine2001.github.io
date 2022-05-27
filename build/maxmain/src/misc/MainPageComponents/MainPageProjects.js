import {Link} from "react-router-dom";
import cartPole from "../../videos/CartPoleRecording.mov";
import pacman from "../../videos/PacmanRecording.mov";
import adva from "../../videos/ADVA.mov"

function MainPageProjects() {
    return (
        <div>
            <div className="flex-container">
                <Link to="/RLAgents">
                    <div className="card RL-card">
                        <div className="card-title">
                            <h3>RLAgents</h3>
                        </div>
                        <video autoPlay loop muted className="background-video">
                            <source src={cartPole} type="video/mp4" />
                        </video>
                    </div>
                </Link>

                <Link to="/PacmanProjects">
                    <div className="card Pacman-card">
                        <div className="card-title">
                            <h3>Pacman Projects</h3>
                        </div>
                        <video autoPlay loop muted className="background-video">
                            <source src={pacman} type="video/mp4" />
                        </video>
                    </div>
                </Link>
            </div>

            <div className="flex-container-2">
                <div className="card ADVA-card">
                    <div className="card-title">
                        <h3 className="ADVA-card-title">ADVA Projects</h3>
                    </div>
                    <video autoPlay loop muted>
                        <source src={ adva } type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default MainPageProjects;