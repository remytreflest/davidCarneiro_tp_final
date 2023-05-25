import React, { useState, useEffect } from 'react'
import file from '../assets/data/data.json'
import axios from "axios";
import CrewLightCard from '../components/CrewLightCard';

function Home() {

    const [originalData, setOriginalData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [search, setSearch] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [noResult, setNoResult] = useState(false)
    
    useEffect(() => {
        fetchData(file.crew_url)
    }, [])

    useEffect(() => {

        if(search != null){
            setFilteredData(originalData.filter((crew) => crew.name.toLowerCase().includes(search.toLowerCase()) || crew.agency.toLowerCase().includes(search.toLowerCase())).map((crew) => <CrewLightCard key={ crew.id } name={ crew.name } src={ crew.image }  id={ crew.id } />))
        } else {
            setFilteredData(originalData.map((crew) => <CrewLightCard key={ crew.id } name={ crew.name } src={ crew.image } id={ crew.id } />))
        }
    }, [search, originalData])

    useEffect(() => {
        if(filteredData.length == 0)
            setNoResult(true)
        else
            setNoResult(false);
    }, [filteredData])

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            setOriginalData(response.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(true)
        }
    }
 
    return (
        <div className='row home-row'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <input className="form-control form-control-lg mt-3 mb-3 col-6" placeholder='Rechercher par nom ou par agence' type="text" id="search" onChange={ (event) => setSearch(event.target.value)} />
                </div>
            </div>
            { noResult ? <div className='alert alert-warning'>Pas de résultats trouvés</div> : null }
            {
                isLoading ? null : filteredData
            }
        </ div>
    )
}
 
export default Home;