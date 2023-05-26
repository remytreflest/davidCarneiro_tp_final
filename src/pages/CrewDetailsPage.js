import React, { useState, useEffect } from 'react'
import { Link, redirect, useParams } from 'react-router-dom'
import file from '../assets/data/data.json'
import axios from 'axios'
import { setBackground } from '../utils/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const CrewDetailsPage = () => {
    setBackground('background-space-x.jpg')
    const [crew, setCrew] = useState([])
    const [launchInfo, setLaunchInfo] = useState([])
    const [isError, setIsError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        fetchData(file.crew_url + '/' + id)
    }, [])

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            setCrew(response.data)
            setIsError(false)
        } catch (error) {
            setIsError(true)
        }
    }

    return (
        <>
            {isError ? (
                <div className='alert alert-warning'>
                    Une erreur est survenue. <Link to='/'>{`Retour à l'accueil`}</Link>
                </div>
            ) : null}

            {!isError ? ( <>
                    <h2 className='mt-4 text-center d-flex col-sm-12 offset-md-3 col-md-6 offset-lg-4 col-lg-4 text-white'>
                        <Link className='btn btn-dark me-2' to={`../../`}>
                            <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: '#ffffff' }} />
                        </Link>
                        {crew.name}
                    </h2>
                    <div
                        className='card card-crew-details-card col-sm-12 offset-md-3 col-md-6 offset-lg-4 col-lg-4'
                        style={{ width: '18rem;' }}
                    >
                        <img className='card-img-top' src={crew.image} alt={crew.name} />
                        <div className='card-body text-center'>
                            <p>Agence : {crew.agency}</p>
                            <p>Status : {crew.status}</p>
                            <p>
                                <a href={crew.wikipedia} target='_blank' rel='noreferrer'>
                                    {crew.wikipedia}
                                </a>
                            </p>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default CrewDetailsPage
