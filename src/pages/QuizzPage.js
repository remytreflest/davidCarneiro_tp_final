import React, { useState, useEffect } from 'react'
import { Link, redirect, useParams } from 'react-router-dom'
import file from '../assets/data/quizz.json'
import QuizzQuestionComponent from '../components/quizz/componentQuizz'
import { shuffle, Timer, setBackground } from '../utils/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function QuizzPage() {
    setBackground('background-5-space-x.jpg')

    const { id } = useParams()
    const quizz = file.find((item) => item.id == id)
    const [questions, setQuestions] = useState(null)
    const [endTimer, setEndTimer] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [showRestartButton, setShowRestartButton] = useState(false)
    const timer = document.getElementById('timer')
    const submitButton = document.getElementById('quizz-submit')

    useEffect(() => {
        if (endTimer) {
            submitButton.click()
            setShowRestartButton(true)
        }
    }, [endTimer])

    useEffect(() => {
        setQuestions(
            shuffle(quizz.questions).map((item, index) => {
                return (
                    <QuizzQuestionComponent
                        key={item.id}
                        idQuestion={item.id}
                        question={item.question}
                        arrayOfResponses={shuffle(item.reponses)}
                        place={index + 1}
                    />
                )
            }),
        )
    }, [])

    const submit = () => {
        const checkboxes = document.querySelectorAll('input[type=radio]:checked')
        const message = document.getElementById('message')

        if (checkboxes.length < 10 && !endTimer) {
            message.classList.add('alert-warning')
            message.classList.remove('alert-success')
            message.innerHTML =
                "Toutes les questions n'ont pas de réponse et il vous reste encore du temps"
            return
        } else {
            message.classList.remove('alert-warning')
            message.classList.add('alert-success')
        }

        const result = [false, false, false, false, false, false, false, false, false, false]

        if (checkboxes.length > 0) {
            for (let i = 0; i < checkboxes.length; i++) {
                const j = checkboxes[i].name.slice(8)
                const userresponse = quizz.questions
                    .find((item) => item.id == j)
                    .reponses.find((item) => item.texte == checkboxes[i].value)
                if (userresponse.vrai) result[i] = true
            }
        }

        message.innerHTML =
            'Vous avez obtenu la note de : ' +
            result.filter((item) => item == true).length +
            ' / 10'

        const allInputs = document.querySelectorAll('input')

        allInputs.forEach((input) => {
            input.disabled = true
            const idQ = input.name.slice(8)
            if (
                quizz.questions
                    .find((question) => question.id == idQ)
                    .reponses.find((reponse) => reponse.texte == input.value).vrai
            ) {
                input.nextElementSibling.style.color = 'green'
            } else {
                input.nextElementSibling.style.color = 'red'
            }
        })
        submitButton.disabled = true
        submitButton.classList.remove('btn-success')
        submitButton.classList.add('btn-secondary')
        setFormSubmitted(true)
    }

    return (
        <div className='card mt-5 quizz-card'>
            {Timer(60, setEndTimer, formSubmitted)}
            <div className='card-header text-center'>
                <Link className='btn btn-dark' to={`../../quizz`}>
                    <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: '#ffffff' }} />
                </Link>
                <h3 className='mt-3 mb-3'>{quizz.titre}</h3>
            </div>
            <div className='card-body'>
                {questions}
                <div id='message' className='alert'></div>
                <button id='quizz-submit' className='btn btn btn-dark' onClick={() => submit()}>
                    Valider les réponses
                </button>
                {showRestartButton ? (
                    <button
                        className='btn btn btn-dark ms-3'
                        onClick={() => window.location.reload()}
                    >
                        Recommencer
                    </button>
                ) : null}
            </div>
        </div>
    )
}
