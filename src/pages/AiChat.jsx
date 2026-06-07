import { useState, useRef, useEffect } from 'react'
import { CreateWebWorkerMLCEngine } from '@mlc-ai/web-llm'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  ArrowUp, Paperclip, Zap, X, Trash2, ChevronDown,
  Code2, FileText, Cpu, MessageSquare, Copy, Check,
  AlertCircle, RotateCcw, Sparkles
} from 'lucide-react'

const MODELS = [
  { id: 'SmolLM2-1.7B-Instruct-q4f16_1-MLC', label: 'SmolLM2 1.7B', badge: '~1 GB' },
  { id: 'Llama-3.2-3B-Instruct-q4f32_1-MLC', label: 'Llama 3.2 3B', badge: '~2 GB' },
  { id: 'Phi-3.5-mini-instruct-q4f16_1-MLC', label: 'Phi-3.5 Mini', badge: '~2.2 GB' },
]

const SUGGESTIONS = [
  { icon: <Code2 className="w-3.5 h-3.5" />, text: 'Write a Python CSV parser' },
  { icon: <Zap className="w-3.5 h-3.5" />, text: 'Explain async/await in JS' },
  { icon: <FileText className="w-3.5 h-3.5" />, text: 'Best practices for REST APIs' },
  { icon: <MessageSquare className="w-3.5 h-3.5" />, text: 'Draft a technical email' },
]

function fileToText(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader()
    reader.onload = () => res(reader.result)
    reader.onerror = rej
    reader.readAsText(file)
  })
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="flex items-center gap-1 text-white/40 hover:text-white/80 transition-colors text-xs"
    >
      {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
    </button>
  )
}

function CodeBlock({ language, children }) {
  const code = String(children).replace(/\n$/, '')
  return (
    <div className="my-3 rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center justify-between px-4 py-1.5 bg-white/5 border-b border-white/10">
        <span className="text-xs text-white/40 font-mono">{language || 'code'}</span>
        <CopyButton text={code} />
      </div>
      <SyntaxHighlighter
        style={oneDark}
        language={language || 'text'}
        customStyle={{ margin: 0, borderRadius: 0, background: 'rgba(0,0,0,0.45)', fontSize: '0.8rem' }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

const mdComponents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline
      ? <CodeBlock language={match?.[1]}>{children}</CodeBlock>
      : <code className="px-1.5 py-0.5 rounded bg-white/10 text-[#d6b747] font-mono text-[0.8em]" {...props}>{children}</code>
  },
  p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1 pl-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1 pl-2">{children}</ol>,
  li: ({ children }) => <li className="text-white/80">{children}</li>,
  h1: ({ children }) => <h1 className="text-xl font-bold text-white mb-2 mt-4 first:mt-0">{children}</h1>,
  h2: ({ children }) => <h2 className="text-lg font-bold text-white mb-2 mt-3 first:mt-0">{children}</h2>,
  h3: ({ children }) => <h3 className="text-base font-semibold text-white mb-1 mt-2 first:mt-0">{children}</h3>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#d6b747] pl-4 my-2 text-white/60 italic">{children}</blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-3 rounded-lg border border-white/10">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-white/15 px-3 py-2 text-left bg-white/5 font-semibold text-white/80">{children}</th>
  ),
  td: ({ children }) => <td className="border-b border-white/5 px-3 py-2 text-white/70">{children}</td>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#19757e] underline hover:text-[#d6b747] transition-colors">
      {children}
    </a>
  ),
  hr: () => <hr className="border-white/10 my-4" />,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="italic text-white/80">{children}</em>,
}

function ThinkingDots() {
  return (
    <div className="flex gap-1.5 items-center py-1 px-1">
      {[0, 120, 240].map(delay => (
        <span
          key={delay}
          className="w-1.5 h-1.5 rounded-full bg-[#d6b747]/60 animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  )
}

function Message({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex gap-3 mb-6 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold tracking-wider ${
        isUser
          ? 'bg-[#d6b747]/15 border border-[#d6b747]/30 text-[#d6b747]'
          : 'bg-[#19757e]/15 border border-[#19757e]/30 text-[#19757e]'
      }`}>
        {isUser ? 'YOU' : 'AI'}
      </div>

      <div className={`flex flex-col gap-2 max-w-[82%] ${isUser ? 'items-end' : 'items-start'}`}>
        {msg.files?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {msg.files.map((f, i) => (
              <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                <FileText className="w-3 h-3" /> {f.name}
              </span>
            ))}
          </div>
        )}
        {(msg.content !== '' || msg.role === 'assistant') && (
          <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? 'bg-[#d6b747]/10 border border-[#d6b747]/20 text-white rounded-tr-sm'
              : 'bg-white/5 border border-white/8 text-white/90 rounded-tl-sm'
          }`}>
            {msg.content === '' && msg.role === 'assistant'
              ? <ThinkingDots />
              : isUser
                ? <p className="whitespace-pre-wrap">{msg.content}</p>
                : <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>{msg.content}</ReactMarkdown>
            }
          </div>
        )}
      </div>
    </div>
  )
}

function ModelPicker({ models, current, onSwitch }) {
  const [open, setOpen] = useState(false)
  const curr = models.find(m => m.id === current)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border border-white/10 hover:border-white/20"
        style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.6)' }}
      >
        <Cpu className="w-3.5 h-3.5" />
        {curr?.label}
        <span className="text-white/30">{curr?.badge}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1.5 rounded-xl border border-white/10 overflow-hidden z-50 min-w-[180px]"
          style={{ background: '#0f0f14', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
          {models.map(m => (
            <button
              key={m.id}
              onClick={() => { onSwitch(m.id); setOpen(false) }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-xs transition-colors hover:bg-white/5 ${
                m.id === current ? 'text-[#d6b747]' : 'text-white/60'
              }`}
            >
              <span>{m.label}</span>
              <span className="text-white/30">{m.badge}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AiChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [model, setModel] = useState(MODELS[0].id)
  const [loading, setLoading] = useState(false)
  const [attachments, setAttachments] = useState([])
  const [engineState, setEngineState] = useState('idle')
  const [loadProgress, setLoadProgress] = useState({ text: 'Initializing…', percent: 0 })
  const [engineError, setEngineError] = useState(null)

  const engineRef = useRef(null)
  const workerRef = useRef(null)
  const loadedModelRef = useRef(null)
  const bottomRef = useRef(null)
  const fileInputRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const loadModel = async (modelId) => {
    setEngineState('loading')
    setLoadProgress({ text: 'Initializing…', percent: 0 })
    setEngineError(null)
    try {
      if (workerRef.current) {
        workerRef.current.terminate()
        workerRef.current = null
        engineRef.current = null
      }
      const worker = new Worker(new URL('../workers/mlcWorker.js', import.meta.url), { type: 'module' })
      workerRef.current = worker
      engineRef.current = await CreateWebWorkerMLCEngine(worker, modelId, {
        initProgressCallback: ({ text, progress }) => {
          setLoadProgress({ text, percent: Math.round((progress || 0) * 100) })
        },
      })
      loadedModelRef.current = modelId
      setEngineState('ready')
    } catch (err) {
      setEngineState('error')
      setEngineError(err.message)
    }
  }

  useEffect(() => {
    if (!navigator.gpu) {
      setEngineState('error')
      setEngineError('WebGPU not supported. Use Chrome 113+ or Edge 113+.')
      return
    }
    loadModel(model)
  }, [])

  const switchModel = async (modelId) => {
    if (modelId === loadedModelRef.current && engineState === 'ready') return
    setModel(modelId)
    setMessages([])
    await loadModel(modelId)
  }

  const autoResize = () => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 200) + 'px'
  }

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files)
    const processed = await Promise.all(files.map(async f => ({
      name: f.name, data: await fileToText(f),
    })))
    setAttachments(prev => [...prev, ...processed])
    e.target.value = ''
  }

  const removeAttachment = (i) => setAttachments(prev => prev.filter((_, idx) => idx !== i))

  const sendMessage = async () => {
    const trimmed = input.trim()
    if ((!trimmed && attachments.length === 0) || loading || engineState !== 'ready') return
    const files = [...attachments]
    let content = trimmed
    if (files.length) {
      const fileBlock = files.map(f => `<file name="${f.name}">\n${f.data}\n</file>`).join('\n\n')
      content = fileBlock + (content ? '\n\n' + content : '')
    }
    const userMsg = { role: 'user', content, displayContent: trimmed, files }
    const history = [...messages, userMsg]
    setMessages(history)
    setInput('')
    setAttachments([])
    setLoading(true)
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])
    try {
      const apiMessages = history.map(m => ({ role: m.role, content: m.content }))
      const chunks = await engineRef.current.chat.completions.create({ messages: apiMessages, stream: true })
      let accumulated = ''
      for await (const chunk of chunks) {
        accumulated += chunk.choices[0]?.delta?.content || ''
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: accumulated }
          return updated
        })
      }
    } catch (err) {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = { role: 'assistant', content: `**Error:** ${err.message}` }
        return updated
      })
    }
    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const clearChat = () => setMessages([])

  // ── Loading ──
  if (engineState === 'idle' || engineState === 'loading') {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-8 px-4"
        style={{ background: 'var(--theme-bg)' }}>
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.2)' }}>
            <Zap className="w-9 h-9" style={{ color: '#d6b747' }} />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping"
            style={{ background: 'rgba(214,183,71,0.4)' }} />
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
            style={{ background: '#d6b747' }} />
        </div>

        <div className="text-center">
          <h2 className="font-display text-xl tracking-widest mb-2" style={{ color: 'var(--theme-text)' }}>
            LOADING MODEL
          </h2>
          <p className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
            {loadProgress.text || 'Starting up…'}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--theme-text-faint)' }}>
            First load downloads &amp; caches the model in your browser
          </p>
        </div>

        <div className="w-full max-w-xs">
          <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--theme-text-faint)' }}>
            <span>Progress</span>
            <span className="font-mono" style={{ color: '#d6b747' }}>{loadProgress.percent}%</span>
          </div>
          <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--theme-border)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${loadProgress.percent}%`, background: 'linear-gradient(90deg, #d6b747, #f0d060)' }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-xs" style={{ color: 'var(--theme-text-faint)' }}>Switch model</p>
          <div className="flex gap-1.5 p-1 rounded-xl" style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}>
            {MODELS.map(m => (
              <button
                key={m.id}
                onClick={() => switchModel(m.id)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={model === m.id
                  ? { background: '#d6b747', color: '#000' }
                  : { color: 'var(--theme-text-muted)' }
                }
              >
                {m.label}
                <span className="ml-1 opacity-50 text-[10px]">{m.badge}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Error ──
  if (engineState === 'error') {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-6 px-4"
        style={{ background: 'var(--theme-bg)' }}>
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(255,80,80,0.08)', border: '1px solid rgba(255,80,80,0.2)' }}>
          <AlertCircle className="w-9 h-9 text-red-400" />
        </div>
        <div className="text-center max-w-sm">
          <h2 className="font-display text-xl tracking-widest mb-3" style={{ color: 'var(--theme-text)' }}>ENGINE ERROR</h2>
          <p className="text-sm px-4 py-3 rounded-xl font-mono break-all"
            style={{ color: '#ff6b6b', background: 'rgba(255,80,80,0.06)', border: '1px solid rgba(255,80,80,0.15)' }}>
            {engineError}
          </p>
        </div>
        <button
          onClick={() => loadModel(model)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
          style={{ background: '#d6b747', color: '#000' }}
        >
          <RotateCcw className="w-4 h-4" /> Retry
        </button>
      </div>
    )
  }

  // ── Chat ──
  return (
    <div className="flex flex-col h-screen" style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}>

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3 flex-shrink-0 backdrop-blur-xl"
        style={{ borderBottom: '1px solid var(--theme-border)', background: 'var(--theme-nav-bg)' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(214,183,71,0.12)', border: '1px solid rgba(214,183,71,0.3)' }}>
            <Zap className="w-4 h-4" style={{ color: '#d6b747' }} />
          </div>
          <div>
            <h1 className="font-display text-sm tracking-widest" style={{ color: 'var(--theme-text)' }}>MACCHANU AI</h1>
            <p className="text-[10px]" style={{ color: 'var(--theme-text-faint)' }}>Private · In-browser · No server</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ModelPicker models={MODELS} current={model} onSwitch={switchModel} />
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              title="Clear chat"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/5"
              style={{ border: '1px solid var(--theme-border)', color: 'var(--theme-text-faint)' }}
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-6 pb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.18)' }}>
                <Sparkles className="w-7 h-7" style={{ color: '#d6b747' }} />
              </div>
              <div>
                <h2 className="text-lg font-medium mb-1" style={{ color: 'var(--theme-text)' }}>
                  What can I help you with?
                </h2>
                <p className="text-sm" style={{ color: 'var(--theme-text-faint)' }}>
                  Text · Code · Files — runs entirely in your browser
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 max-w-lg">
              {SUGGESTIONS.map(s => (
                <button
                  key={s.text}
                  onClick={() => { setInput(s.text); textareaRef.current?.focus() }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all"
                  style={{
                    background: 'var(--theme-surface)',
                    border: '1px solid var(--theme-border)',
                    color: 'var(--theme-text-muted)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(214,183,71,0.35)'
                    e.currentTarget.style.color = '#d6b747'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--theme-border)'
                    e.currentTarget.style.color = 'var(--theme-text-muted)'
                  }}
                >
                  {s.icon}
                  {s.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {messages.map((msg, i) => (
              <Message key={i} msg={{ ...msg, content: msg.displayContent ?? msg.content }} />
            ))}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="flex-shrink-0 px-4 pb-5 pt-3"
        style={{ borderTop: '1px solid var(--theme-border)', background: 'var(--theme-nav-bg)' }}>
        <div className="max-w-3xl mx-auto">

          {/* Attachments */}
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3 px-1">
              {attachments.map((a, i) => (
                <div key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs"
                  style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)', color: 'var(--theme-text-muted)' }}
                >
                  <FileText className="w-3 h-3" />
                  <span className="max-w-[100px] truncate">{a.name}</span>
                  <button onClick={() => removeAttachment(i)} className="ml-0.5 opacity-50 hover:opacity-100 transition-opacity">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Input box — v0-style */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={e => { setInput(e.target.value); autoResize() }}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything… (Shift+Enter for newline)"
              rows={1}
              className="w-full px-4 pt-3.5 pb-2 text-sm resize-none bg-transparent outline-none"
              style={{
                color: 'var(--theme-text)',
                minHeight: '56px',
                maxHeight: '200px',
                overflowY: 'auto',
              }}
            />

            <div className="flex items-center justify-between px-3 pb-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 p-2 rounded-lg transition-all text-xs group"
                style={{ color: 'var(--theme-text-faint)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--theme-text-muted)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--theme-text-faint)'}
              >
                <Paperclip className="w-4 h-4" />
                <span className="hidden group-hover:inline text-xs">Attach</span>
              </button>

              <button
                onClick={sendMessage}
                disabled={loading || (!input.trim() && attachments.length === 0) || engineState !== 'ready'}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                style={{
                  background: (input.trim() || attachments.length > 0) && !loading ? '#d6b747' : 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <ArrowUp className={`w-4 h-4 ${(input.trim() || attachments.length > 0) && !loading ? 'text-black' : 'text-white/40'}`} />
              </button>
            </div>
          </div>

          <p className="text-center text-[10px] mt-2" style={{ color: 'var(--theme-text-faint)' }}>
            WebLLM · {MODELS.find(m => m.id === model)?.label} · runs in your browser · no data leaves your device
          </p>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".txt,.md,.py,.js,.ts,.jsx,.tsx,.json,.csv,.xml,.html,.css,.yaml,.yml,.toml,.sh,.bash,.sql,.go,.rs,.cpp,.c,.h,.java,.rb,.php,.swift,.kt,.scala,.r"
        multiple
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  )
}
