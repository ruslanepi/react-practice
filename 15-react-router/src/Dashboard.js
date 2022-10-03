import React from 'react'

const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <div>hello {user?.name}</div>
    </section>
  )
}

export default Dashboard
