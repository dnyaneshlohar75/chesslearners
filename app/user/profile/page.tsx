"use client"
import React from 'react'
import ProfileCard from '@/app/components/sub/Profile/ProfileCard'
import PersonalInfoCard from '@/app/components/sub/Profile/PersonalInfoCard'
import SocialLinksCard from '@/app/components/sub/Profile/SocialLinksCard'

const ProfilePage = async () => {
  
  return (
    <>
      <div className="grid grid-cols-6 gap-5 mb-20">
        <ProfileCard />
        <PersonalInfoCard />
        <SocialLinksCard />      
      </div>

    </>

  )
}

export default ProfilePage;