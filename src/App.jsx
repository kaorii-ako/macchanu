import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
}

function AnimatedOutlet() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

function MainLayout() {
  return (
    <>
      <TopNavBar />
      <main><AnimatedOutlet /></main>
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
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/sponsorship-prospectus" element={<PdfViewer />} />
              <Route path="/merch" element={<Merch />} />
            </Route>
            <Route path="/ai" element={<AiChat />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
