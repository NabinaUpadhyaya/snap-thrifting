import React from 'react'
import Header from '../components/Header'
import Team from '../components/team'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div className='pt-10'>
        <Team></Team>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
