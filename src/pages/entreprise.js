import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Company_URL from '../assets/data/data.json'
// import IMG from '../assets/img'
import ComponentCompany from '../components/entreprise/entrepriseDesc'

export default function EntreprisePage() {
    const { id } = useParams();
    // console.log(id);

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(Company_URL.company_url)
            // console.log(response.data);
            let test = [];
            // let image = [];
            // for(){

            // }
            for (const [key, value] of Object.entries(response.data)) {
                // console.log(`${key}: ${value}`);
                if(`${value}` == "Elon Musk")
                {
                    test.push(key);
                    // console.log(test)
                }
              }
            setData(
                <ComponentCompany 
                key={response.data.id}
                fondateur = {test[0] = test[0].charAt(0).toUpperCase() + test[0].slice(1)}
                CEO = {test[1].toUpperCase()}
                CTO = {test[2].toUpperCase()}
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
                test_sites={response.data.test_sites}
                founded={response.data.founded}
                link_website={response.data.links.website}
                link_twitter_elon={response.data.links.elon_twitter}
                link_twitter_spacex={response.data.links.twitter}
                link_flickr={response.data.links.flickr}

                />
            )
            console.log(response.data);
            // console.log();


        } catch (error) {
            // window.location.href = '/404'
            console.error(error)
        }
    }

    return (
            <div>
                <div>
                    <h2 className="mb-4 mt-4">Informations supplémentaire</h2>
                    {data}
                </div>
            </div>
    )
}