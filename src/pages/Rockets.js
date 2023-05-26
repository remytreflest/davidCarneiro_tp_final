import React, { useState, useEffect } from 'react'
import file from '../assets/data/data.json'
import axios from 'axios'
import RocketLightCard from '../components/RocketLightCard'

function Rockets() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData(file.rocket_url)
    }, [])

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            setData(
                response.data.map((crew) => (
                    <RocketLightCard
                        key={crew.id}
                        name={crew.name}
                        src={crew.flickr_images[0]}
                        id={crew.id}
                    />
                )),
            )
            setIsLoading(false)
        } catch (error) {
            setIsLoading(true)
        }
    }

    return <div className='row home-row'>{isLoading ? null : data}</div>
}

export default Rockets
