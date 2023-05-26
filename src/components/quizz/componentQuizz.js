export default function QuizzQuestionComponent({ question, idQuestion, arrayOfResponses, place }) {
    const responses = arrayOfResponses.map((response, index) => {
        return (
            <div key={index} className='form-check'>
                <input
                    className='form-check-input'
                    type='radio'
                    name={`response${idQuestion}`}
                    value={response.texte}
                />
                <label className='form-check-label' htmlFor={`response${idQuestion}`}>
                    {response.texte}
                </label>
            </div>
        )
    })

    return (
        <div className='mb-4'>
            <h5>
                Question {place} : {question}
            </h5>
            {responses}
        </div>
    )
}
