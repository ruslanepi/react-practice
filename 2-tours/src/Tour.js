import React from 'react'

const Tour = ({ id, name, image, price, info, removeTour }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt='' />

      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
      </div>
      <p>{info}</p>
      <button onClick={() => removeTour(id)}>remove tour</button>
    </article>
  )
}

export default Tour
