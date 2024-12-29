import React from 'react'
import { useParams } from 'react-router-dom'

const index = () => {
    const {username} = useParams();
  return (
    <div>
        <p>Dynamic Route page</p>
        <p>Your username is: {username}</p>
    </div>
  )
}

export default index