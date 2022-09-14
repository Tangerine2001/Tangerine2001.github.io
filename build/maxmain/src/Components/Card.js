import '../stylesheets/Card.css';
import {Link} from "react-router-dom";

function Card(props) {
    const project = props.project;
    return (
        // style={{ textDecoration: 'none' }} is used to remove underline
        <Link to={ project.link } target="_blank" style={{ textDecoration: 'none' }}>
            <div className="card">
                    <p>{project.name}</p>
                    <video height={`${project.height}`} width={`${project.width}`} muted autoPlay loop>
                        <source src={ project.file } type="video/mp4" />
                    </video>
            </div>
        </Link>
    )
}

export default Card;