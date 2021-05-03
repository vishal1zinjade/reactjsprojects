import React from 'react'

const SingleProfile = ({ user, addUser }) => {
  return (
    <div className='person-info'>
      <img src={user.avatar_url} alt={user.login}></img>
      <div>
        <strong>{user.login}</strong>
      </div>
      <button onClick={() => addUser({ user })}>Hire</button>
    </div>
  )
}

export default SingleProfile
