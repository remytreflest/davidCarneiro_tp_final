import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Company_URL from '../assets/data/data.json'
import { setBackground } from '../utils/functions'
import ComponentCompany from '../components/entreprise/entrepriseDesc'

export default function EntreprisePage() {
    setBackground('background-3-space-x.jpg')
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(Company_URL.company_url)
            let tableau = []

            for (const [key, value] of Object.entries(response.data)) {
                if (`${value}` == 'Elon Musk') {
                    tableau.push(key)
                }
            }
            setData(
                <ComponentCompany
                    key={response.data.id}
                    fondateur={
                        (tableau[0] = tableau[0].charAt(0).toUpperCase() + tableau[0].slice(1))
                    }
                    CEO={tableau[1].toUpperCase()}
                    CTO={tableau[2].toUpperCase()}
                    ceo={response.data.ceo}
                    coo={response.data.coo}
                    cto={response.data.cto}
                    name={response.data.name}
                    headquarter_address={response.data.headquarters.address}
                    headquarter_city={response.data.headquarters.city}
                    headquarter_state={response.data.headquarters.state}
                    cto_propulsion={response.data.cto_propulsion}
                    summary={response.data.summary}
                    valuation={response.data.valuation}
                    employees={response.data.employees}
                    vehicles={response.data.vehicles}
                    tableau_sites={response.data.tableau_sites}
                    founded={response.data.founded}
                    link_website={response.data.links.website}
                    link_twitter_elon={response.data.links.elon_twitter}
                    link_twitter_spacex={response.data.links.twitter}
                    link_flickr={response.data.links.flickr}
                />,
            )
        } catch (error) {
            // TODO gestion réelle des erreurs
            console.error(error)
        }
    }

    return (
        <div>
            <div>
                <div>
                    <h2 className='mb-4 mt-4 text-center titre-entreprise'>
                        Informations supplémentaire
                    </h2>
                    {data}
                </div>
            </div>
        </div>
    )
}
