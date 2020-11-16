import React, { useState } from "react"
import axios from "axios"

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("")

  const onSubmitHandler = async e => {
    e.preventDefault()
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content })
    setContent("")
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>New Comment</label>
          <input value={content} onChange={e => setContent(e.target.value)} className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default CommentCreate
