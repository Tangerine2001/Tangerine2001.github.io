import Card from '../../Components/Card'
import curlyBracket from '../../images/curlyBracket/curlyBracket.png';
import cartPole from "../../videos/CartPoleRecording.mov";
import pacman from "../../videos/PacmanRecording.mov";
import adva from "../../videos/ADVA.mov"

function MainPageProjects() {
    const rlProject = {
        name: "RLAgents",
        link: "/RLAgents",
        file: cartPole,
        width: 299,
        height: 200
    }

    const pacmanProject = {
        name: "Pacman Projects",
        link: "/PacmanProjects",
        file: pacman,
        width: 420,
        height: 200
    }

    const moreProject = {
        name: "etc...",
        link: "/RLAgents",
        file: adva,
        width: 760,
        height: 400
    }

    return (
        <div className="projects grey">
            <div className="projects-content">
                <p className="projects-title">Projects</p>
                <div className="projects-main-content">
                    <img src={ curlyBracket } alt={"Curly Bracket"}/>
                    <div className="projects-cards">
                        <div className="flex-row">
                            <Card project={ rlProject }/>
                            <Card project={ pacmanProject }/>
                        </div>
                        <div className="flex-row">
                            <Card project={ moreProject } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPageProjects;