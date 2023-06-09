import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand ms-2' href='/'>
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
                    <NavLink className='nav-item nav-link' to='/rockets'>
                        Fusées
                    </NavLink>
                    <NavLink className='nav-item nav-link' to='/quizz'>
                        [Couiz]
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
