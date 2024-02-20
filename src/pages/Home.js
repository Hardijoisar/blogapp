import React from 'react'
import { Pagination } from '../components/Pagination';
import { Header } from '../components/Header';
import { Blogs } from '../components/Blogs';

export const Home = () => {
  return (
    <div className="App">
       <Header/>
       <Blogs/>
       <Pagination/>
    </div>
  )
}
