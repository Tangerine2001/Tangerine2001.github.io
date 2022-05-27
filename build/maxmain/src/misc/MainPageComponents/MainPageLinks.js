import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function MainPageLinks() {
    return (
        <div className="links">
            <a href="https://github.com/Tangerine2001" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={ faGithub } size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/max-tang-gt" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={ faLinkedin } size="2x" />
            </a>
        </div>
    );
}

export default MainPageLinks;