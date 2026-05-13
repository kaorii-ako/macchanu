import { BrowserRouter as Router, Routes, Route, Outlet } from 's/react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import TopNavBar from './components/TopNavBar'
import Home from './pages/Home'
import Team from './pages/Team'
import Engineering from './pages/Engineering'
import Sponsorship from './pages/Sponsorship'
import PdfViewer from './pages/PdfViewer'
import Merch from './pages/Merch'
import AiChat from './pages/AiChat'
import Footer from './components/Footer'

function MainLayout() {
  return (
    <>
      <TopNavBar />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative theme-root">
          <div className="noise-overlay" />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/sponsorship-prospectus" element={<PdfViewer />} />
              <Route path="/merch" element={<Merch />} />
            </Route>
            {/* The /ai route is outside MainLayout so it doesn't show the Navbar/Footer */}
            <Route path="/ai" element={<AiChat />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
