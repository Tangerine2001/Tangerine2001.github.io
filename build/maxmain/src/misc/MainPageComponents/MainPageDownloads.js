import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleDown, faFileLines} from "@fortawesome/free-solid-svg-icons";

function MainPageDownloads() {
    return (
        <div className="aboutContainer">
            <Link to="/downloads/Max Tang Resume Copy.pdf" target="_blank" download>
                <div className="download">
                    <FontAwesomeIcon icon={faFileLines} size="4x"/>
                    <div className="downloadText">
                        <p>Resume</p>
                        <FontAwesomeIcon icon={ faCircleDown } />
                    </div>
                </div>
            </Link>
            <Link to="/downloads/Max Tang Cover Letter.docx" target="_blank" download>
                <div className="download">
                    <div className="download">
                        <FontAwesomeIcon icon={faFileLines} size="4x"/>
                        <div className="downloadText">
                            <p>Cover Letter</p>
                            <FontAwesomeIcon icon={ faCircleDown } />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MainPageDownloads;