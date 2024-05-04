import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const {page} = useParams();

  console.log(page)

  return (
    <div class='profile-wrapper'>Profile</div>
  )
}

export default Profile