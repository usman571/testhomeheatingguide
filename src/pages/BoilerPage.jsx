import React from 'react'
import Header from '../components/Header'
import BoilerHero from '../components/BoilerHero'
import BoilerBody from '../components/BoilerBody'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const BoilerPage = () => {
  return (
    <div>
        <Header/>
        <BoilerHero/>
        <BoilerBody/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default BoilerPage