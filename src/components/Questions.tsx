import { nanoid } from 'nanoid';
import React from 'react'

interface Props {
    question: {
        question: string;
        allAnswers:[]
    }
    id: any;
    key:any;
    handleClickedAnswer: (id:any, answer:string) => void
    
    
}

const Questions: React.FC<Props> = (props) => {

let answers = props.question.allAnswers

const choices = answers.map(answer=>{

    return(
        <button key={nanoid()}>{answer}</button>
    )
})

  return (
    <div>
    <div>{props.question.question}</div>
    <div>{choices}</div>
    </div>
  )
}

export default Questions