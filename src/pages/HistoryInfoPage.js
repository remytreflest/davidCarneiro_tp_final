import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import History_URL from '../assets/data/data.json'
import HistoryInfo from '../components/histories/historyInfo'
import { setBackground } from '../utils/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function HistoryInfoPage() {
    setBackground('background-7-space-x.jpg', '0% 0%')
    const { id } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(History_URL.history_url + '/' + id)
            setData(
                <HistoryInfo
                    key={response.data.id}
                    title={response.data.title}
                    links={response.data.links}
                    event_date_utc={response.data.event_date_utc}
                    detail={response.data.details}
                />,
            )
            console.log(response.data.details)
        } catch (error) {
            window.location.href = '/404'
            console.error(error)
        }
    }

    return (
        <div>
            <div>
                <div>
                    <h2 className='mb-4 mt-4 text-center titre-infoSupp d-flex'>
                        <Link className='btn btn-dark me-2' to={`../../history`}>
                            <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: '#ffffff' }} />
                        </Link>
                        Informations supplémentaire
                    </h2>
                </div>
                {data}
            </div>
        </div>
    )
}
