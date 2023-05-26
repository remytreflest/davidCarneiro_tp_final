import { Link, useLocation } from 'react-router-dom'

const Error = ({ text }) => {
    const location = useLocation()

    return (
        <div className='d-flex flex-column align-items-center justify-content-center vh-100 bg-primary'>
            <h1 className='display-1 fw-bold text-white'>Erreur {text}</h1>
            <p className='text-white'>Vous êtes sur la page : {location.pathname}</p>
            <br />
            <p className='text-white'>{`Mais il n'y a rien à voir`}</p>
            <br />
            <Link className='text-white' to='/'>{`Revenir à l'accueil`}</Link>
        </div>
    )
}

export default Error
