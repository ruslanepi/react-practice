import { useEffect } from 'react'
import axios from 'axios'
import authFetch from '../axios/interceptors'
const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch(url)
      console.log(resp)
    } catch (error) {
      console.log(error.resp)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
