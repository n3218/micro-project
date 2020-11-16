import React, { useState, useEffect } from "react"
import axios from "axios"
import CreateComment from "./CreateComment"

const PostList = () => {
  const [posts, setPosts] = useState({})
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts")
    setPosts(res.data)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  const renderPosts = Object.values(posts).map(post => {
    return (
      <div className="card" style={{ width: "48%", marginBottom: "20px" }} key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CreateComment postId={post.id} />
        </div>
      </div>
    )
  })

  return <div className="d-flex fles-row flex-wrap justify-content-between">{renderPosts}</div>
}

export default PostList
