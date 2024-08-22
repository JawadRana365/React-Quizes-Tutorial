import React, { Fragment, useContext, useEffect, useState } from 'react'
import { quizesListContext } from '../../App'
import QuizCard from '../QuizCard/QuizCard'

export default function QuizContainer() {
    const [quizesList,setQuizesList] = useContext(quizesListContext)
    const [score,setScore] = useState(0)
    const [activeQuestion,setActiveQuestion] = useState(undefined)
    const [result,setResult] = useState(undefined)

    const handleNextClicked = () => {
        if(activeQuestion.id == 5){
            score >= 20 ?  setResult("Pass") : setResult("Failed")
        }else{
            setActiveQuestion(prevActiveQuestion => {
                return quizesList.find(question => question.id == prevActiveQuestion.id + 1)
            })
        }
    }

    
    useEffect(() => {
        setActiveQuestion(quizesList[0])
    },[quizesList])

    return (
        <div className='flex flex-col gap-4 w-96 h-auto mx-auto my-auto border p-4 rounded-lg shadow-md'>
            {!result ?
                <Fragment>
                    <div className='w-full flex flex-row justify-end'>
                        <p className='text-sm'>Score: {score}</p>
                    </div>
                    {activeQuestion && <QuizCard question={activeQuestion} setScore={setScore} />} 
                    <div className='w-full flex flex-row justify-end'>
                        <button 
                            className='bg-white text-black text-sm px-4 py-1'
                            onClick={handleNextClicked}
                        >Next</button>
                    </div>
                </Fragment>
                :
                <Fragment>
                    {/****Results will be here****/}
                    { result == "Pass" ?
                        <p className='border border-green-600 p-8'>Congratulations You are Passed with {score} Marks...!</p>
                        :
                        <p className='border border-red-600 p-8'>We are very sorry you are not able to achive mnimun passing scores of 20. Your score is {score}.</p>
                    }
                </Fragment>
            }
        </div>
    )
}
