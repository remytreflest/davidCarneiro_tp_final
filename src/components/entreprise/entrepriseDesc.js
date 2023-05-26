import addDots from '../../utils/functions'

// import IMG from '../../assets/img'
export default function ComponentCompany({
    link_flickr,
    link_twitter_spacex,
    link_twitter_elon,
    link_website,
    founded,
    test_sites,
    vehicles,
    valuation,
    summary,
    CTO,
    CEO,
    fondateur,
    headquarter_state,
    headquarter_city,
    headquarter_address,
    name,
    ceo,
    coo,
    cto,
    cto_propulsion,
    employees,
}) {
    return (
        <div className='mb-2 fade-in'>
            <div className='bloc-div-entreprise row'>
                <div className='card card-crew-light-card col-lg-4 col-md-6 col-sm-12'>
                    <img
                        src={require(`../../assets/img/${ceo}.jpg`)}
                        className='card-img-top img-card'
                        alt='...'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{ceo}</h5>
                        <p className='card-text'>{fondateur}</p>
                        <p className='card-text'>{CEO}</p>
                        <p className='card-text'>{CTO}</p>
                    </div>
                </div>
                <div className='card card-crew-light-card col-lg-4 col-md-6 col-sm-12'>
                    <img
                        src={require(`../../assets/img/${coo}.jpg`)}
                        className='card-img-top img-card'
                        alt='...'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{coo}</h5>
                        <p className='card-text'>COO de Space-X</p>
                    </div>
                </div>
                <div className='card card-crew-light-card col-lg-4 col-md-6 offset-md-3 offset-lg-0 col-sm-12'>
                    <img
                        src={require(`../../assets/img/${cto_propulsion}.jpg`)}
                        className='card-img-top img-card'
                        alt='...'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{cto_propulsion}</h5>
                        <p className='card-text'>CTO Propulsion de Space-X</p>
                    </div>
                </div>
            </div>
            <div className='card mt-4 div-entreprise-spacex'>
                <img
                    src={require(`../../assets/img/${name}.png`)}
                    className='card-img-top img-spacex'
                    alt='...'
                />
                <div className='card-body div-spacex '>
                    <h5 className='card-title text-center'>{name}</h5>
                    <h6 className='card-title text-center'>Date de fondation : {founded}</h6>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Résumé</span>
                    </p>
                    <p>{summary}</p>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Nombre {"d'employé"}</span> :{' '}
                        {addDots(employees)}
                    </p>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Adresse </span> :{' '}
                        {headquarter_address}
                    </p>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Ville </span> :{' '}
                        {headquarter_city}
                    </p>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Etat </span> :{' '}
                        {headquarter_state}
                    </p>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Valeur</span> :{' '}
                        {addDots(valuation)} €
                    </p>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Nombre de fusée</span> :{' '}
                        {vehicles}
                    </p>
                    <p className='card-text'>
                        <span className='text-decoration-underline'>Site de lancement</span> :{' '}
                        {test_sites}
                    </p>
                    <a className='img-link' href={link_website}>
                        <img
                            className='logo-link'
                            src={require(`../../assets/img/icon_spacex.png`)}
                        />
                    </a>
                    <a className='img-link' href={link_twitter_elon}>
                        <img
                            className='logo-link'
                            src={require(`../../assets/img/icon_twitter.png`)}
                        />
                    </a>
                    <a className='img-link' href={link_twitter_spacex}>
                        <img
                            className='logo-link'
                            src={require(`../../assets/img/icon_twitter.png`)}
                        />
                    </a>
                    <a className='img-link' href={link_flickr}>
                        <img
                            className='logo-link'
                            src={require(`../../assets/img/icon_flickr.png`)}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
