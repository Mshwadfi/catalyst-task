import { BookOpen, LogOut, Settings } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const UserDropDown = () => {
  return (
    <div className="absolute top-10 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1">
    <Link href="/profile">
      <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center">
        <Settings className="w-4 h-4 mr-2" />
        Profile
      </button>
    </Link>
    <Link href="/bookings">
      <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center">
        <BookOpen className="w-4 h-4 mr-2" />
        My bookings
      </button>
    </Link>
    <button
      onClick={() => signOut()}
      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Sign out
    </button>
  </div>
  )
}

export default UserDropDown