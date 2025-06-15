import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile && selectedUser) {
    // Show only RightSidebar when on mobile and a user is selected
    return <RightSidebar />
  }

  return (
    <div className='flex w-full h-screen'>
      <Sidebar />
      <ChatContainer />
      <div className='hidden md:block'>
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
