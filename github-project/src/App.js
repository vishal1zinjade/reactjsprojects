import React, { useState, useEffect } from 'react'
import './styles.css'
import Favourite from './Favourite'
import SingleProfile from './SingleProfile'

const App = () => {
  const [users, setUsers] = useState([])
  const [fav, setFav] = useState([])
  const url = 'https://api.github.com/users'

  const fetchUsers = async () => {
    setFav([])
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users.slice(0, 12))
    } catch (error) {}
  }

  const deleteUser = (id) => {
    setFav(
      fav.filter((user) => {
        if (user.id == id) {
          users.push(user)
        }
        return user.id != id
      })
    )
  }
  const addUser = ({ user }) => {
    const year = new Date().getFullYear
    console.log(year)
    fav.push(user)

    setFav(
      fav.map((favUser) => {
        return favUser
      })
    )
    setUsers(
      users.filter((temp) => {
        return temp.id != user.id
      })
    )
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    setFav([])
  }, [])

  return (
    <main>
      <h1>freelancing app</h1>
      {users.length > 0 ? (
        ''
      ) : (
        <button className='btn' onClick={() => fetchUsers()}>
          Hire again
        </button>
      )}
      <div className='section'>
        {users.map((user) => {
          return (
            <div>
              <SingleProfile user={user} addUser={() => addUser({ user })} />
            </div>
          )
        })}
      </div>
      <div className='line'></div>
      {
        <div className='section'>
          {fav.map((user) => {
            return (
              <div>
                <Favourite user={user} deleteUser={() => deleteUser(user.id)} />
              </div>
            )
          })}
        </div>
      }
      <div className='rights'>
        Copyright @{new Date().getUTCFullYear()} all right reserved
      </div>
    </main>
  )
}

export default App
