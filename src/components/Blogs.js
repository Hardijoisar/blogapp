import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Post } from './Post'
import '../index.css'

export const Blogs = () => {
  // consume context
  const {loading, posts} = useContext(AppContext)

  return (
    <div >
      {
      loading ? (
        <h1 className='text-4xl font-bold mb-2'>
          Loading...
        </h1>
      ) : 
      (
        posts.map((post) => {
          return (
          <Post post = {post} key={post.id}/>
          )
        }
        )
      )
      }
    </div>
  )
}
