import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Login from './Login'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  const { token } = useContext(AppContext)

  // If no token, show login on home page
  if (!token) {
    return <Login />
  }

  // If logged in, show home content
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home
