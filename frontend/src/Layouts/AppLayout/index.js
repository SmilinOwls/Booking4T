import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import { Redirect } from 'react-router-dom'

const AppLayout = ({children, userAuth}) => {
  if(userAuth === null) return (<Redirect to="/" replace/>)
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default AppLayout