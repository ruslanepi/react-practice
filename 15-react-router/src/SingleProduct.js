import React from 'react'
import products from './data'
import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {
  console.log(useParams())
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  const { image, name } = product
  return (
    <section className='section product'>
      <img src={image} alt={name} />

      <h5>{name}</h5>
      <h4>Id of product: {productId}</h4>

      <Link to='/products'> back to products</Link>
    </section>
  )
}

export default SingleProduct
