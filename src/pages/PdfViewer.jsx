import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function PdfViewer() {
  const [iframeSrc, setIframeSrc] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const iframeRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const path = '/prospectus.pdf'
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const src = isSafari
      ? `https://docs.google.com/gviewer?embedded=true&url=${encodeURIComponent(window.location.origin + path)}`
      : path
    setIframeSrc(src)

    timeoutRef.current = setTimeout(() => {
      setFailed(true)
      setLoading(false)
    }, 12000)

    return () => clearTimeout(timeoutRef.current)
  }, [])

  const handleLoad = useCallback(() => {
    clearTimeout(timeoutRef.current)
    setLoaded(true)
    setLoading(false)
  }, [])

  const handleError = useCallback(() => {
    clearTimeout(timeoutRef.current)
    setFailed(true)
    setLoading(false)
  }, [])

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="section-padding pb-8">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-gold"
              style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.25)' }}>
              SPONSORSHIP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', color: 'var(--theme-text)' }}
          >
            SPONSORSHIP <span className="text-gradient">PROSPECTUS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base font-grotesk mb-6"
            style={{ color: 'var(--theme-text-muted)', maxWidth: '42ch' }}
          >
            Full details on partnership tiers, benefits, and our journey to the F1 in Schools World Finals 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-3"
          >
            <a href="/prospectus.pdf" download className="btn-gold inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
            <a href="/prospectus.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </a>
          </motion.div>
        </div>
      </section>

      {/* PDF Frame */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="relative overflow-hidden"
            style={{
              border: '1px solid var(--theme-border)',
              borderRadius: 20,
              background: 'var(--theme-surface)',
              minHeight: '80vh',
            }}
          >
            {/* Loading overlay */}
            {loading && !failed && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20"
                style={{ background: 'var(--theme-surface)' }}>
                <div className="w-10 h-10 rounded-full border-2 border-mac-gold/20 border-t-mac-gold animate-spin mb-4" />
                <p className="text-[11px] font-grotesk tracking-widest" style={{ color: 'var(--theme-text-faint)' }}>
                  LOADING PROSPECTUS
                </p>
              </div>
            )}

            {/* Failed overlay */}
            {failed && !loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center p-8"
                style={{ background: 'var(--theme-surface)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(214,183,71,0.1)', border: '1px solid rgba(214,183,71,0.2)' }}>
                  <svg className="w-7 h-7 text-mac-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-2" style={{ color: 'var(--theme-text)' }}>
                  PREVIEW UNAVAILABLE
                </h3>
                <p className="text-sm font-grotesk mb-6 max-w-xs" style={{ color: 'var(--theme-text-muted)' }}>
                  Your browser blocked the inline viewer. Use the buttons above to access the document.
                </p>
              </div>
            )}

            {iframeSrc && (
              <iframe
                ref={iframeRef}
                src={iframeSrc}
                title="Sponsorship Prospectus"
                className="w-full border-0"
                style={{
                  height: '84vh',
                  opacity: loaded ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
                onLoad={handleLoad}
                onError={handleError}
                allowFullScreen
              />
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
