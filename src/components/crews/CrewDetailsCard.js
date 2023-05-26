import React, { useState, useEffect } from 'react'
import { Link, redirect, useParams } from 'react-router-dom'
import file from '../../assets/data/data.json'
import axios from 'axios'

const CrewDetailsCard = () => {
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

            {!isError ? (
                <div className='card col-9 crew-details-card'>
                    <img
                        className='card-img-top img-crew-details-card col-3'
                        src={crew.image}
                        alt={crew.name}
                    />
                    <ul className='list-group list-group-flush ul-crew-details-card col-9'>
                        <li className='list-group-item'>Nom : {crew.name}</li>
                        <li className='list-group-item'>Agence : {crew.agency}</li>
                        <li className='list-group-item'>Status : {crew.status}</li>
                        <li className='list-group-item'>
                            Numéro(s) de vol(s) :{' '}
                            {crew.launches != undefined ? crew.launches.join(' ') : null}
                        </li>
                        <li className='list-group-item'>
                            Lien Wikipédia :{' '}
                            <a href={crew.wikipedia} target='_blank' rel='noreferrer'>
                                {crew.wikipedia}
                            </a>
                        </li>
                    </ul>
                </div>
            ) : null}
        </>
    )
}

export default CrewDetailsCard
