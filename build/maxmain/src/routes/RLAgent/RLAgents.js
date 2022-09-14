import ProjectNavbar from "../../Components/ProjectNavbar";
import TableOfContentsBar from "../../Components/TableOfContentsBar";
import tensorFlowImage from "../../images/tensorflowImage.png"
import openAI from "../../images/openAIGym.png"
import '../../stylesheets/projectContent.css'
import { useState } from "react";
import ClassicControl from "./Subpages/ClassicControl";
import Atari from "./Subpages/Atari";

function RLAgents() {
    const [classicSelected, setClassicSelected] = useState(false);
    const [atariSelected, setAtariSelected] = useState(false);

    const tableOfContents = {
        title: 'RLAgents',
        items: ['ClassicControl', 'Atari'],
        'ClassicControl': {
            selected: classicSelected,
            setSelect: setClassicSelected,
            subItems: ['CartPole', 'Mountain Car']
        },
        'Atari': {
            selected: atariSelected,
            setSelect: setAtariSelected,
            subItems: ['Breakout']
        }
    };

    return (
        <div>
            <ProjectNavbar />
            <TableOfContentsBar contents={tableOfContents}/>
            { determineContent(classicSelected, atariSelected, [1, 2]) }
        </div>
    )
}

function determineContent(classicSelected, atariSelected, refs) {
    const openLinkInNewWindow = (link) => {
        window.open(link)
    }
    if (!classicSelected && !atariSelected) {
        return (
            <div className="project-content">
                <h1>RLAgents</h1>
                <div className="project-content-date">Last updated May 26th, 2022 at 10:37 A.M. (EST)</div>
                <p>
                    Welcome to my page explaining how I solved OpenAI Gym's problems. This is
                    still a work in progress, so I still have many left to solve, but for now
                    you can read about my solutions to the Classic Control problems. To solve them,
                    I exclusively used Tensorflow's library. You can check out both links here:
                </p>
                <div className="center">
                    <img className="project-content-image" src={ tensorFlowImage } alt="Tensorflow Logo Here"
                         onClick={() => openLinkInNewWindow('https://www.tensorflow.org/api_docs')}/>
                    <img className="project-content-image" src={ openAI } alt="OpenAI Logo Here"
                         onClick={() => openLinkInNewWindow('https://www.gymlibrary.ml')}/>
                </div>
                <p>
                    I used simple neural networks to solve the Classic Control problems, trained through
                    deep reinforcement learning. I am still working on the Atari games as of this latest
                    update. You can read more in depth by clicking the links in the Table of Contents on the left.
                </p>
            </div>
        )
    } else if (classicSelected) {
        return (
            <ClassicControl />
        )
    } else {
        return (
            <Atari />
        )
    }
}

export default RLAgents;