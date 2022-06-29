import { useState, useEffect } from 'react'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const myJobs = await response.json()
    setJobs(myJobs)
    setLoading(false)
    console.log(myJobs)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return
  }

  const { company, dates, duties, title } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>expirience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
