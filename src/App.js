import React from "react"
import CreatePost from "./CreatePost"
import PostList from "./PostList"

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  )
}

export default App
