import React, { useState } from 'react'
import { icons } from 'react-icons/lib'
import data from './data'
import './styles.css'
import SingleQuestion from './SingleQuestion'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'

const App = () => {
  const [question, setQuestion] = useState([])

  return (
    <main>
      <h1>react interview questions and answers</h1>
      <section className='section-parent'>
        <article className='container'>
          {data.map((question) => {
            return (
              <div>
                <SingleQuestion {...question} />
              </div>
            )
          })}
        </article>
      </section>
    </main>
  )
}

export default App
