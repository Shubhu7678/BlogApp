import React from 'react'
import ProfileMain from './profileMain'
import ProfileAbout from './ProfileAbout'
import AdditionalDetails from './AdditionalDetails'

const Profile = () => {
  return (
    <div className="bg-gray-900 h-[calc(100vh-64px)] w-full">
      <div className=" w-[850px] h-full mx-auto pt-8">
          <h2 className="text-3xl font-sans text-gray-300 ">My Profile</h2>
              <ProfileMain />
              <ProfileAbout />
              <AdditionalDetails />
    
      </div>
    </div>
  )
}

export default Profile