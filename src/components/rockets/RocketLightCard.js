import { Link } from 'react-router-dom'

const RocketLightCard = ({ name, src, id }) => {
    return (
        <Link className='col-3 text-decoration-none ' to={`/rockets/${id}`}>
            <div className='card fade-in card-crew-light-card '>
                <img className='card-img-top img-rocket-light-card' src={src} alt={name} />
                <div className='card-body'>
                    <p className='card-text'>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default RocketLightCard
