import { Link } from 'react-router-dom'

export default function HistoryInfo({ title, links, event_date_utc, detail }) {
    return (
        <div className='card div-info-historique fade-in '>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <h6 className='card-subtitle mb-2'>{event_date_utc.substr(0, 10)}</h6>
                <p className='card-text'>{detail}</p>
                <a href={links['article']} className='link-article'>
                    Lien de {"l'article"}
                </a>
            </div>
        </div>
    )
}
