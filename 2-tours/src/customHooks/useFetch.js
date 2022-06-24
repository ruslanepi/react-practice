import React, { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const getTours = async () => {
    const response = await fetch(url)
    const tours = await response.json()

    setTours(tours)
    setLoading(false)
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  g
  useEffect(() => {
    getTours()
  }, [url])

  return { loading, tours, removeTour }
}
