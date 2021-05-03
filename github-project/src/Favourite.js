import React from 'react'

const Favourite = ({ user, deleteUser }) => {
  return (
    // <div>
    <div className='person-info'>
      <img src={user.avatar_url} alt={user.login}></img>
      <div>
        <strong>{user.login}</strong>
      </div>
      <button onClick={() => deleteUser(user.id)}>Remove</button>
      {/* </div> */}
    </div>
  )
}
export default Favourite
