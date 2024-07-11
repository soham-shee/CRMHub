import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const user=false
  const navigate = useNavigate()
  return (
    <>
    <Header />
    <Form />
    </>
  )
}

export default Dashboard