import React from 'react'
import { Header } from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '../components/Pagination';
import { Blogs } from '../components/Blogs';
import "../App.css"
import "../index.css"

export const TagPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className='App'>
        <Header/>
        <button className='btn' onClick={() => {
            navigate(-1);
        }}>Back</button>
        <h2>Blogs tagged {tag}</h2>
        <Blogs></Blogs>
        <Pagination/>
    </div>
  )
}
