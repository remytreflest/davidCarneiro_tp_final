import { Link } from "react-router-dom"

const CrewLightCard = ({ name, src, id }) => {
    return (
        <Link className="col-3" to={`/crew/${ id }`}>
            <div className="card">
                <img className="card-img-top" src={ src } alt={ name } />
                <div className="card-body">
                    <p className="card-text">{ name }</p>
                </div>
            </div>
        </Link>
    )
}

export default CrewLightCard