import React, { useContext } from 'react'
import {AppContext} from '../contexts/AppContext'
import '../index.css'

export const Pagination = () => {

  const {page, totalPage, pageChange} = useContext(AppContext)

  function prevHandler()
  {
    pageChange(page-1)
  }

  function nextHandler()
  {
    pageChange(page+1)
  }

  return (
    <div>
      {/* <button>Pagination</button> */}
      <span className='even'> 
        <span className='start'>
      {
        !(page === 1)
        ?
        (
          <button className='btn' onClick={prevHandler}>Previous</button>
        ) 
        : 
        (
          <div></div>
        )
      }
      {
        !(page===totalPage) ?
        (
          <button className='btn' onClick={nextHandler}>Next</button>
        ) : 
        (
          <div></div>
        )
      }
      </span>
      <p>Page {page} of {totalPage}</p>
      </span>
    </div>
  )
}
