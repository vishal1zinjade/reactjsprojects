import React, { useState, useEffect } from 'react'
import data from './data'
import './styles.css'
import Person from './Person'
import Loading from './Loading'

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <section className='parent-container'>
      <section className='container'>
        <span>{people.length} birthdays today</span>
        {people.map((person) => {
          return <Person person={person} />
        })}
        <button onClick={() => setPeople([])}> clear all</button>
      </section>
    </section>
  )
}

export default App
