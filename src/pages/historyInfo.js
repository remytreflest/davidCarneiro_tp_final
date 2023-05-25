import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import History_URL from '../assets/data/data.json'
import HistoryInfo from '../components/historyInfo/historyInfo'

export default function HistoryOne() {
    const { id } = useParams();
    // console.log(id);

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(History_URL.history_url + '/' + id)
            setData(
                <HistoryInfo key={response.data.id} title={response.data.title} links={response.data.links} event_date_utc={response.data.event_date_utc} detail={response.data.details} />
            )
            console.log(response.data.details)
        } catch (error) {
            window.location.href = '/404'
            console.error(error)
        }
    }

    return (
            <div>
                <div className="bouton-retour">
                    <Link to={'/history'} >
                        <button className="btn btn-primary mt-4">Historique</button>
                    </Link>

                </div>

                <div>
                    <h2 className="mb-4 mt-4">Informations supplémentaire</h2>
                    {data}
                </div>
            </div>
    )
}