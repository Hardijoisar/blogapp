import React from 'react'
import { Header } from '../components/Header'
import { Pagination } from '../components/Pagination';
import { Blogs } from '../components/Blogs';
import { useNavigate } from 'react-router-dom';

export const BlogPage = () => {
    const navigate = useNavigate();
  return (
    <div className='App'>
        <Header></Header>
        <button className='btn' onClick={() => {
            navigate(-1);
        }}>Back</button>
        <h1>Related Blogs</h1>
        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}
