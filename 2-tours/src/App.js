import React, { useState, useEffect } from 'react'

import Loading from './Loading'
import Tours from './Tours'
import { useFetch } from './customHooks/useFetch'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const { loading, tours, removeTour } = useFetch(url)

  return (
    <main>
      <section className='container'>
        {loading ? (
          <h2>Loading..</h2>
        ) : (
          <Tours tours={tours} removeTour={removeTour} />
        )}
      </section>
    </main>
  )
}

export default App
