import React, { useEffect, useState } from 'react'

export default function QuizCard({question,setScore}) {
    const[answerClicked,setAnswerClicked] = useState(false)

    const handleOptionClick = (option) => {
        if(question.correctAnswer == option){
            setScore(prevScore => prevScore + 10)
        }
        setAnswerClicked(true)
    }
    useEffect(() => {
      setAnswerClicked(false)
    },[question])

    return (
        <div className='text-left'>
            <h4 className='text-lg'>Question No: {question.id}</h4>
            <p className='text-lg'>{question.question}</p>
            <h4 className='text-lg'>Answer:</h4>
            { question.option.map((option,key) => (
                <p 
                    className={
                        `text-lg border mb-2 px-4 
                        ${answerClicked && option == question.correctAnswer ? "border-green-600" : answerClicked && "border-red-600" }`}
                    onClick={() => !answerClicked && handleOptionClick(option)}
                >{key+ 1}: {option}</p>
            ))}
        </div>
    )
}
