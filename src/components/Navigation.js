import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='#'>
                Space-X
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to='/'>
                        Accueil
                    </NavLink>
                    <NavLink className='nav-item nav-link' to='/history'>
                        Historique
                    </NavLink>
                    <NavLink className='nav-item nav-link' to='/company'>
                        Informations
                    </NavLink>
                    <NavLink className='nav-item nav-link' to='/quizz'>
                        Quizz
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
