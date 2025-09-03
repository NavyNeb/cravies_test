import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip max-w-full bg-white">
        <Header />
        <main className="flex-1 w-full max-w-full bg-amber-300">
            <div className="max-w-full">
                <Outlet />
            </div>
        </main> 
        <Footer />
    </div>
  )
}

export default AppLayout