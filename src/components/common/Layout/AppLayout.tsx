import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip w-screen bg-white">
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-clip bg-amber-300">
            <div className="max-w-full overflow-x-clip">
                <Outlet />
            </div>
        </main> 
        <Footer />
        <Toaster richColors position="top-right" />
    </div>
  )
}

export default AppLayout