import { Link } from 'react-router-dom'

const CrewLightCard = ({ name, src, id }) => {
    return (
        <Link
            className='col-lg-3 col-md-4 col-sm-8 offset-sm-2 offset-md-0 offset-lg-0 text-decoration-none'
            to={`/crew/${id}`}
        >
            <div className='card col-12 card-crew-light-card fade-in'>
                <img className='card-img-top' src={src} alt={name} />
                <div className='card-body'>
                    <p className='card-text'>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default CrewLightCard
