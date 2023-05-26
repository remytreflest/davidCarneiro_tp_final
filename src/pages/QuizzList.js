import { Link, redirect, useParams } from 'react-router-dom'
import file from '../assets/data/quizz.json'
import { setBackground } from '../utils/functions'

export default function QuizzList() {

    setBackground("background-6-space-x.jpg")

    const quizzList = file.map((item) => {
        console.log(item)
        return (
            <Link key={ item.id } className="quizz-list-card card col-xl-8 col-sm-12 offset-sm-0 offset-xl-2 mt-3 mb-3" to={`${item.id}`}>
                <div className="card-body">
                    {item.titre}
                </div>
            </Link>
        )
    })

    return (
        <div className='row'>
            <h1 className='text-center mt-3 mb-3 text-white'><img className='me-2' src="./assets/img/icons8-elon-musk-64-white.png" alt="Elon Musk icon" />Liste des [Couiz] </h1>
            <p className='text-center text-white'>Pour chaque [Couiz] vous disposerez de 60 secondes</p>
            {quizzList}
        </div>
    )
}
