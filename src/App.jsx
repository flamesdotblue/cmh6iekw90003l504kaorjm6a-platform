import { useState } from 'react'
import NavBar from './components/NavBar'
import PageRouter from './components/PageRouter'
import Footer from './components/Footer'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-[#0b1a2b] text-white font-inter">
      <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">
        <PageRouter currentPage={currentPage} onNavigate={setCurrentPage} />
      </main>
      <Footer />
    </div>
  )
}
