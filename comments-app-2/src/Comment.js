import React, { useEffect, useState } from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'

const Comment = ({ singleComment }) => {
  const { user, comment } = singleComment
  const [like, setLike] = useState(false)
  const [unlike, setUnLike] = useState(false)
  const [color, setColor] = useState('')
  const [colors, setColors] = useState([
    'red',
    'blue',
    'green',
    'coral',
    'orange',
    'black',
    'pink',
    'black',
    'skyblue',
    'lightgreen',
  ])

  useEffect(() => {
    const val = (Math.random() * 10).toString().slice(0, 1)
    setColor(colors[val])
  }, [])

  useEffect(() => {}, [like])
  console.log(color)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            marginTop: '20px',
            background: color,
            borderRadius: '50%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2 style={{ color: 'white' }}>{user?.slice(0, 1).toUpperCase()}</h2>
        </div>
        <div style={{ marginLeft: '10px' }}>
          <h3>{user}</h3>
          <span>{comment}</span>
        </div>
      </div>
      <div style={{ margin: '0px 50px' }}>
        <span>
          <FaRegThumbsUp
            style={{
              fontSize: '20px',
              margin: '10px 10px',
              color: like ? 'green' : 'black',
            }}
            onClick={() => {
              setLike(!like)
              setUnLike(false)
            }}
          />
        </span>
        <span>
          <FaRegThumbsDown
            style={{
              fontSize: '20px',
              margin: '10px 10px',
              color: unlike ? 'red' : 'black',
            }}
            onClick={() => {
              setUnLike(!unlike)
              setLike(false)
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default Comment
