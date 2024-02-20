import React from 'react'

export const Post = ({post}) => {

  return (
    <div className='blogs'>
        <h3>{post.title}</h3>
        <p>By <i>{post.author}</i> on {post.category}</p>
        <p>Posted On {post.date}</p>
        <p>{post.content}</p>
        <span>
            {post.tags.map((tag, index) => {
                return (
                    <span className='blu' key={index}>#{tag}  </span>
                )
            })}
        </span>
    </div>
  )
}
