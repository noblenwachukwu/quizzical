import React from 'react'

interface Props {
    questions: [];
    id: any;
    
}

const Questions: React.FC<Props> = ({questions}) => {
  return (
    <div>{questions}</div>
  )
}

export default Questions