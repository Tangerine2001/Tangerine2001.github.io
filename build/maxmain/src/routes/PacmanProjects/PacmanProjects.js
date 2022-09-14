import { useState } from "react";
import ProjectNavbar from "../../Components/ProjectNavbar";
import TableOfContentsBar from "../../Components/TableOfContentsBar";
import berkeley from "../../images/PacmanProjects/berkeley.png"
import Project1 from "./Subpages/Project1";

function PacmanProjects() {
    const [p1, setp1Selected] = useState(false);
    const [p2, setp2Selected] = useState(false);
    const [p3, setp3Selected] = useState(false);
    const [p4, setp4Selected] = useState(false);

    const tableOfContents = {
        title: 'Pacman Projects',
        items: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
        'Project 1': {
            selected: p1,
            setSelect: setp1Selected,
            subItems: ['Sub 1', 'Sub 2']
        },
        'Project 2': {
            selected: p2,
            setSelect: setp2Selected,
            subItems: ['Sub 1', 'Sub 2']
        },
        'Project 3': {
            selected: p3,
            setSelect: setp3Selected,
            subItems: ['Sub 1', 'Sub 2']
        },
        'Project 4': {
            selected: p4,
            setSelect: setp4Selected,
            subItems: ['Sub 1', 'Sub 2']
        }
    };

    return (
        <div>
            <ProjectNavbar />
            <TableOfContentsBar contents={tableOfContents}/>
            { determineContent(p1, p2, p3, p4) }
        </div>
    )
}

export default PacmanProjects;

function determineContent(p1, p2, p3, p4) {
    const openLinkInNewWindow = (link) => {
        window.open(link)
    }
    if (!p1 && !p2 && !p3 && !p4) {
        return (
            <div className="project-content">
                <h1>Pacman Projects</h1>
                <div className="project-content-date">Last updated May 26th, 2022 at 10:37 A.M. (EST)</div>
                <p>
                    Welcome to my page about the projects that were assigned during my Introduction to
                    AI class at <span className="link" onClick={() => openLinkInNewWindow("https://www.gatech.edu/")}>Georgia Institute of Technology.</span>
                    All of these projects involved an iteration of pacman, and watching pacman solve various games and scenarios.
                    No big famous ML/AI package was used. However, these projects were derived from the original pacman projects
                    from Berkeley.
                </p>
                <div className="center">
                    <img className="project-content-image" src={ berkeley }
                         onClick={() => openLinkInNewWindow("https://ai.berkeley.edu/project_overview.html")}
                         alt="Berkeley logo"/>
                </div>
            </div>
        )
    } else if (p1) {
        return (
            <Project1 />
        )
    } else if (p2) {
        return (
            <div />
        )
    } else if (p3) {
        return (
            <div />
        )
    } else {
        return (
            <div />
        )
    }
}