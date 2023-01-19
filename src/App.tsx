import React from 'react';
import StartGame from './components/StartGame';
import { nanoid } from 'nanoid'
import Questions from './components/Questions';








const App: React.FC  = () => {
  const [startGame, setStartGame] = React.useState<boolean>(false)
  const [questions, setQuestions] = React.useState<any[]>([])
  const [count,setCount] = React.useState<number>(0)
console.log(questions)

React.useEffect(()=>{

 async function fetchQuestion(){
   const  res = await fetch(`https://opentdb.com/api.php?amount=5&encode=base64`)
   const data = await res.json()
   const prepareData = data.results.map((question:any) => {
    return {
      checked:false,
      selected:null,
      id: nanoid(),
      question: atob(question.question),
      correct_answer: atob(question.correct_answer),
      allAnswers: [
        atob(question.correct_answer),
        ...question.incorrect_answers.map((incorrectAnswer:any) =>
          atob(incorrectAnswer)
        ),
      ].sort(() => Math.random() - 0.5),
    };
  });
  setQuestions(prepareData);

 }
 fetchQuestion()
},[count])

function handleStart():void{
  setStartGame(true)
}

function handleClickedAnswer(id: any, answer:string){
 setQuestions(prevQuestion=> prevQuestion.map(question=>{
  return question.id === id ? {...question, selected: answer}: question
 }))
}

const questionElement = questions.map(question=>{
  return(
    <Questions 
      id={question.id}
      key={question.id}
      question={question}  
      handleClickedAnswer={handleClickedAnswer}
           />
  )
})

  return (
    <div>
      { !startGame ? <StartGame handleStart={handleStart}/>
        :
        <div> {questionElement} </div>}
     
    </div>
  )
}

export default App;
