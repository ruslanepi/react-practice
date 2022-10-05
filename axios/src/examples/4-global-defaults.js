import { useEffect } from 'react'
import axios from 'axios'
const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstanse = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl)
      const resp2 = await axios(randomUserUrl)
      console.log(resp2.data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div>GlobalInstanse</div>
}

export default GlobalInstanse
