import React, { useState, useEffect } from 'react'
import data from './data'
import './styles.css'

const App = () => {
  const [people, setPeople] = useState([])
  const [showmore, setShowmore] = useState(false)

  const removePerson = ({ id }) => {
    const newPeople = people.filter((person) => {
      return person.id != id
    })
    setPeople(newPeople)
  }

  const refreshPeople = () => {
    setPeople(data)
  }

  useEffect(() => {
    setPeople(data)
  }, [])

  return (
    <div className='container'>
      <div className={people.length == 0 ? 'section-empty' : 'section'}>
        <h3>{people.length == 0 ? 'Please click on Refresh button' : ''}</h3>
        <h1>india tourism</h1>
        <button
          className={people.length == 0 ? 'btn' : ''}
          onClick={() => refreshPeople()}
        >
          {people.length == 0 ? 'Refresh' : ''}
        </button>

        {people.map((person) => {
          return (
            <div className='person-info'>
              <img src={person.image} alt={person.name} />
              <div>
                <span>{person.name}</span>
              </div>
              <div>
                <span>{person.price}</span>
              </div>
              <p>
                {showmore ? person.info : `${person.info.substring(0, 100)}`}
                <strong onClick={() => setShowmore(!showmore)}>
                  {showmore ? 'show less' : '  ...read more'}
                </strong>
              </p>
              <button
                className='btn'
                onClick={() => removePerson({ ...person })}
              >
                Not interested
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
