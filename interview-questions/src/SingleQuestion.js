import React from 'react'
import { useState } from 'react'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'
import './styles.css'

const SingleQuestion = ({ question, answer }) => {
  const [info, setInfo] = useState(false)

  return (
    <article className='parent-article'>
      <div className='article'>
        <strong>{question}</strong>
        <span onClick={() => setInfo(!info)}>
          {info ? (
            <icons>
              <HiMinusCircle />{' '}
            </icons>
          ) : (
            <icons>
              <HiPlusCircle />
            </icons>
          )}
        </span>
      </div>
      <div> {info ? <p>{answer}</p> : <p></p>}</div>
    </article>
  )
}

export default SingleQuestion
