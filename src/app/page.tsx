import React from 'react'
import AuthorCard from './component/AuthoreCard'
import Mega from './component/Mega'
import Feature from './component/Feature'
import Footer from './component/Footer'

const page = () => {
  return (
    <div>
      <AuthorCard/>
      <Feature/>
      <Mega/>
      <Footer/>
    </div>
  )
}

export default page

