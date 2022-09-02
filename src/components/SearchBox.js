import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {



  return (
    <div className='text-center m-4'>

        <input className='px-8 py-2 rounded-full  text-center bg-white' 
        type='search' 
        placeholder='Search robots' 
        onChange={searchChange} 
        />

    </div>
  )
}

export default SearchBox