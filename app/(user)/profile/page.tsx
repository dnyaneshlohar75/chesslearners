import React from 'react'
import ProfileCard from '@/app/components/sub/Profile/ProfileCard'
import PersonalInfoCard from '@/app/components/sub/Profile/PersonalInfoCard'
import SocialLinksCard from '@/app/components/sub/Profile/SocialLinksCard'

const ProfilePage = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-5">
        <ProfileCard />
        <PersonalInfoCard />
        <SocialLinksCard />
      
      <div className="col-span-6 space-x-3">
        <button className="px-4 py-3 text-indigo-700 rounded-md font-medium text-sm bg-gray-100">
          Cancel
        </button>
        <button className="px-4 py-3 bg-indigo-700 rounded-md font-medium text-sm text-gray-50">
          Save changes
        </button>
      </div>
      </div>

    </>

  )
}

export default ProfilePage;