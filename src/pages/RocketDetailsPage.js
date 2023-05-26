import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import file from '../assets/data/data.json'
import axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'
import { PolarArea } from 'react-chartjs-2'
import addDots from '../utils/functions'

const RocketDetailsPage = () => {
    const [rocket, setRocket] = useState([])
    const [rocketMass, setRocketMass] = useState([])
    const [rocketHeight, setRocketHeight] = useState([])
    const [rocketDiameter, setRocketDiameter] = useState([])
    const [carouselItems, setCarouselItems] = useState([])
    const [polarArea, setPolarArea] = useState([])
    const [isError, setIsError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        fetchData(file.rocket_url)
    }, [])

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            const ship = response.data.find((item) => item.id == id)
            setRocket(ship)
            setPolarArea(
                response.data.map((rocket) => [
                    {
                        name: rocket.name,
                        kg: rocket.mass.kg,
                    },
                ]),
            )
            setCarouselItems(
                ship.flickr_images.map((img, index) => {
                    return (
                        <div key={index}>
                            <img src={img} />
                        </div>
                    )
                }),
            )
            setRocketDiameter(ship.diameter.meters)
            setRocketHeight(ship.height.meters)
            setRocketMass(ship.mass.kg)
            setIsError(false)
        } catch (error) {
            setIsError(true)
        }
    }

    ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

    function random_rgba() {
        var o = Math.round,
            r = Math.random,
            s = 255
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')'
    }

    const data = {
        labels: polarArea.map((array) => array[0].name),
        datasets: [
            {
                label: 'Poids en Kg',
                data: polarArea.map((array) => array[0].kg),
                backgroundColor: polarArea.map((array) => random_rgba()),
                borderWidth: 1,
            },
        ],
    }

    return (
        <>
            {isError ? (
                <div className='alert alert-warning'>
                    Oups !Une erreur est survenue. <Link to='/'>{`Retour à l'accueil`}</Link>
                </div>
            ) : null}

            {!isError ? (
                <div>
                    <h2 className='text-center mt-4 mb-4 titre-rocket-details'>{rocket.name}</h2>
                    <div className='card col-8 offset-2 mt-3 fade-in card-rocket-detail'>
                        <Carousel
                            className='rocket-details-caroussel'
                            showArrows={true}
                            showThumbs={true}
                        >
                            {carouselItems}
                        </Carousel>

                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Nom : {rocket.name}</li>
                            <li className='list-group-item'>Type : {rocket.type}</li>
                            <li className='list-group-item'>Hauteur : {rocketHeight} mètres</li>
                            <li className='list-group-item'>Diamètre : {rocketDiameter} mètres</li>
                            <li className='list-group-item'>Masse : {addDots(rocketMass)} Kg</li>
                            <li className='list-group-item'>
                                Actif : {rocket.active ? 'Active' : 'Inactive'}
                            </li>
                            <li className='list-group-item'>Etages : {rocket.stages}</li>
                            <li className='list-group-item'>Booster : {rocket.boosters}</li>
                            <li className='list-group-item'>
                                Coût par lancement : {addDots(rocket.cost_per_launch)} $
                            </li>
                            <li className='list-group-item'>
                                Taux de réussite : {rocket.success_rate_pct}
                            </li>
                            <li className='list-group-item'>
                                Premier vol :{' '}
                                {new Date(rocket.first_flight).toLocaleString('fr-Fr', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric',
                                })}
                            </li>
                            <li className='list-group-item'>Pays : {rocket.country}</li>
                            <li className='list-group-item'>Compagnie : {rocket.company}</li>
                            <li className='list-group-item'>Description : {rocket.description}</li>
                            <li className='list-group-item'>
                                Lien Wikipédia :{' '}
                                <a href={rocket.wikipedia} target='_blank' rel='noreferrer'>
                                    {rocket.wikipedia}
                                </a>
                            </li>
                        </ul>

                        <div className='col-6 offset-3'>
                            <p className='mb-3'>
                                <b>Comparaison des fusées en terme de poids (kg)</b>
                            </p>
                            <PolarArea data={data} />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default RocketDetailsPage
