import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import data from './data'
import { FaCommentDots } from 'react-icons/fa'
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegShareSquare,
  FaRegSave,
} from 'react-icons/fa'

const Comments = () => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([data])
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [like, setLike] = useState(false)
  const [unlike, setUnLike] = useState(false)

  const addComment = () => {
    setComments([
      ...comments,
      { id: '', user: comment.slice(0, 1), comment: comment },
    ])
    setComment('')
    setShowCommentBox(false)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setComment(e.target.value)
  }

  console.log(showCommentBox)
  useEffect(() => {
    setComments(data)
  }, [])
  return (
    <div>
      <div style={{ padding: '20px', width: 'fit-content' }}>
        <img
          src='https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/31/0dfe05d1f843d2705c096b93ccb80e54_original.jpg'
          alt=''
          style={{ width: '700px', height: '400px' }}
        />

        <h2>One Direction - What Makes You Beautiful (Official Video)</h2>
      </div>
      <div
        style={{
          display: 'flex',
          margin: '-20px 180px 0px 0px',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <span>
          <FaRegThumbsUp
            style={{
              fontSize: '20px',
              margin: '0px 10px',
              color: like ? 'green' : 'black',
            }}
            onClick={() => {
              setLike(!like)
              setUnLike(false)
            }}
          />
          <b>LIKE</b>
        </span>
        <span>
          <FaRegThumbsDown
            style={{
              fontSize: '20px',
              margin: '0px 10px',
              color: unlike ? 'red' : 'black',
            }}
            onClick={() => {
              setUnLike(!unlike)
              setLike(false)
            }}
          />
          <b>UNLIKE</b>
        </span>
        <span>
          <FaRegShareSquare
            style={{
              fontSize: '20px',
              margin: '0px 10px',
            }}
          />
          <b>SHARE</b>
        </span>
        <span>
          <FaRegSave
            style={{
              fontSize: '20px',
              margin: '0px 10px',
            }}
          />
          <b>SAVE</b>
        </span>
      </div>
      <div>
        {comments.map((singleComment) => {
          return <Comment singleComment={singleComment} />
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'flex-end',
        }}
      >
        <div>
          <h3>
            Comments <FaCommentDots />
          </h3>

          <textarea
            name='comment'
            id='comment'
            placeholder='Add a comment...'
            style={{ width: '90%', height: '100px' }}
            onChange={handleChange}
            value={comment}
            onClick={() => setShowCommentBox(true)}
          ></textarea>
        </div>
        <div>
          <div style={{ display: showCommentBox ? 'block' : 'none' }}>
            <button
              onClick={() => {
                setShowCommentBox(false)
                setComment('')
              }}
            >
              Cancel
            </button>
            <button onClick={addComment} disabled={comment ? false : true}>
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
