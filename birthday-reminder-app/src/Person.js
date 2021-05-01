import React from 'react'

const Person = ({ person }) => {
  return (
    <div className='person-info'>
      <div className='person-image'>
        <img src={person.image} alt={person.name}></img>
      </div>
      <div className='person-detail'>
        <div>{person.name}</div>
        <div>{person.age} years</div>
      </div>
    </div>
  )
}

export default Person
