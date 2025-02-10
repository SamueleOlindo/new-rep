import React from 'react'
import { useParams } from 'react-router'

function SingleAccount() {
  const parametri = useParams()
  console.log(parametri)
  return (
    <div>
        <h1>Ciao: {parametri.name}</h1>
    </div>
  )
}

export default SingleAccount