import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavBar from './components/TopNavBar'
import Home from './pages/Home'
import Team from './pages/Team'
import Engineering from './pages/Engineering'
import Sponsorship from './pages/Sponsorship'
import PdfViewer from './pages/PdfViewer'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-mac-black relative">
        <div className="noise-overlay" />
        <TopNavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/sponsorship-prospectus" element={<PdfViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
