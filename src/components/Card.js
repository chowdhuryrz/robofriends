import React from 'react'

const Card = ({ name, email, id }) => {

  return (

    <div className='bg-[#2a9d8f] justify-center text-center inline-block rounded-xl p-3 m-2 hover:scale-[1.04] ease-in duration-200 border-2 shadow-black shadow-md'>

        <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>

        <div>
            <h2 className='font-bold p-2'>{name}</h2>
            <p>{email}</p>
        </div>

    </div>
  )
}

export default Card