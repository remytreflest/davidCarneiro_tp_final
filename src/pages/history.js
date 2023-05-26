import React, { useState, useEffect } from 'react'
import axios from 'axios'
import History_URL from '../assets/data/data.json'
import HistoryList from '../components/histories/historyList'
import { setBackground } from '../utils/functions'

export default function History() {

    setBackground("background-7-space-x.jpg", '0% 0%')
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(History_URL.history_url)
            setData(
                response.data.map((element) => {
                    {
                        return (
                            <HistoryList key={element.id} id={element.id} title={element.title} />
                        )
                    }
                }),
            )
        } catch (error) {
            window.location.href = '/404'
            console.error(error)
        }
    }
    return (
        <div>
            <h2 className='text-center mt-4 mb-4 titre-historique'>Historique de {"l'entreprise"}</h2>
            {data}
        </div>
    )
}
