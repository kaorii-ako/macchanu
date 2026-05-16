import { useState, useRef, useEffect } from 'react'
import { CreateWebWorkerMLCEngine } from '@mlc-ai/web-llm'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const MODELS = [
  { id: 'SmolLM2-1.7B-Instruct-q4f16_1-MLC', label: 'SmolLM2 1.7B', badge: '~1 GB' },
  { id: 'Llama-3.2-3B-Instruct-q4f32_1-MLC', label: 'Llama 3.2 3B', badge: '~2 GB' },
  { id: 'Phi-3.5-mini-instruct-q4f16_1-MLC', label: 'Phi-3.5 Mini', badge: '~2.2 GB' },
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
      className="text-white/40 hover:text-white/80 transition-colors text-xs"
    >
      {copied ? '✓ Copied' : 'Copy'}
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
    <div className="flex gap-1 items-center py-1">
      {[0, 150, 300].map(delay => (
        <span
          key={delay}
          className="w-1.5 h-1.5 rounded-full bg-[#d6b747] animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  )
}

function Message({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <div className={`flex gap-3 mb-5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold ${
        isUser
          ? 'bg-[#d6b747]/20 border border-[#d6b747]/40 text-[#d6b747]'
          : 'bg-[#19757e]/20 border border-[#19757e]/40 text-[#19757e]'
      }`}>
        {isUser ? 'U' : 'AI'}
      </div>

      <div className={`flex flex-col gap-2 max-w-[82%] ${isUser ? 'items-end' : 'items-start'}`}>
        {msg.files?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {msg.files.map((f, i) => (
              <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/8 border border-white/15 text-xs text-white/60">
                📄 {f.name}
              </span>
            ))}
          </div>
        )}
        {(msg.content !== '' || msg.role === 'assistant') && (
          <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? 'bg-[#d6b747]/15 border border-[#d6b747]/25 text-white'
              : 'bg-white/5 border border-white/10 text-white/90'
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

const SUGGESTIONS = [
  'Write a Python script to parse a CSV file',
  'Explain how async/await works in JavaScript',
  'What are the best practices for REST API design?',
  'Draft a professional technical email',
]

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

      const worker = new Worker(
        new URL('../workers/mlcWorker.js', import.meta.url),
        { type: 'module' }
      )
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
      name: f.name,
      data: await fileToText(f),
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
      const chunks = await engineRef.current.chat.completions.create({
        messages: apiMessages,
        stream: true,
      })

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
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => setMessages([])

  // ── Loading screen ──
  if (engineState === 'idle' || engineState === 'loading') {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-6 px-4"
        style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.2)' }}>
          ⚡
        </div>
        <div className="text-center">
          <h2 className="font-display tracking-wider mb-1" style={{ color: 'var(--theme-text)' }}>LOADING MODEL</h2>
          <p className="text-sm" style={{ color: 'var(--theme-text-muted)' }}>
            {loadProgress.text || 'Starting up…'}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--theme-text-faint)' }}>
            First load downloads &amp; caches the model in your browser
          </p>
        </div>

        <div className="w-full max-w-sm">
          <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--theme-text-faint)' }}>
            <span>Progress</span>
            <span>{loadProgress.percent}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--theme-border)' }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${loadProgress.percent}%`, background: '#d6b747' }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
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
                <span className="ml-1 opacity-60 text-[10px]">{m.badge}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Error screen ──
  if (engineState === 'error') {
    return (
      <div className="flex flex-col h-screen items-center justify-center gap-5 px-4"
        style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: 'rgba(255,80,80,0.08)', border: '1px solid rgba(255,80,80,0.2)' }}>
          ✕
        </div>
        <div className="text-center max-w-sm">
          <h2 className="font-display tracking-wider mb-2" style={{ color: 'var(--theme-text)' }}>ENGINE ERROR</h2>
          <p className="text-sm px-4 py-3 rounded-xl font-mono" style={{ color: '#ff6b6b', background: 'rgba(255,80,80,0.08)', border: '1px solid rgba(255,80,80,0.2)' }}>
            {engineError}
          </p>
        </div>
        <button
          onClick={() => loadModel(model)}
          className="px-5 py-2 rounded-xl text-sm font-medium"
          style={{ background: '#d6b747', color: '#000' }}
        >
          Retry
        </button>
      </div>
    )
  }

  // ── Chat UI ──
  return (
    <div className="flex flex-col h-screen" style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
      <header className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0 backdrop-blur-xl"
        style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-nav-bg)' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ background: 'rgba(214,183,71,0.15)', border: '1px solid rgba(214,183,71,0.35)', color: '#d6b747' }}>
            AI
          </div>
          <div>
            <h1 className="font-display text-sm tracking-wider" style={{ color: 'var(--theme-text)' }}>MACCHANU AI</h1>
            <p className="text-xs" style={{ color: 'var(--theme-text-faint)' }}>Runs in browser · Private · No server</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1 p-1 rounded-lg" style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}>
            {MODELS.map(m => (
              <button
                key={m.id}
                onClick={() => switchModel(m.id)}
                className="px-3 py-1 rounded-md text-xs font-medium transition-all"
                style={model === m.id
                  ? { background: '#d6b747', color: '#000' }
                  : { color: 'var(--theme-text-muted)' }
                }
              >
                {m.label}
                {model === m.id && <span className="ml-1 opacity-60 text-[10px]">{m.badge}</span>}
              </button>
            ))}
          </div>

          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="px-3 py-1.5 text-xs rounded-lg transition-colors"
              style={{ color: 'var(--theme-text-muted)', border: '1px solid var(--theme-border)' }}
            >
              Clear
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.2)' }}>
              ⚡
            </div>
            <div>
              <h2 className="font-medium" style={{ color: 'var(--theme-text-muted)' }}>Browser AI. No limits.</h2>
              <p className="text-sm mt-1" style={{ color: 'var(--theme-text-faint)' }}>
                Text · Code · Files — runs entirely in your browser.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 max-w-sm w-full">
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => { setInput(s); textareaRef.current?.focus() }}
                  className="px-3 py-2.5 text-xs text-left rounded-xl transition-all"
                  style={{ color: 'var(--theme-text-muted)', border: '1px solid var(--theme-border)', background: 'var(--theme-surface)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--theme-border-hover)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--theme-border)'}
                >
                  {s}
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

      <div className="flex-shrink-0 border-t px-4 py-4 backdrop-blur-xl"
        style={{ borderColor: 'var(--theme-border)', background: 'var(--theme-nav-bg)' }}>

        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {attachments.map((a, i) => (
              <div key={i} className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs"
                style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)', color: 'var(--theme-text-muted)' }}>
                <span>📄</span>
                <span className="max-w-[100px] truncate">{a.name}</span>
                <button onClick={() => removeAttachment(i)} style={{ color: 'var(--theme-text-faint)' }}
                  className="ml-0.5 hover:opacity-100 transition-opacity text-sm leading-none">×</button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2 items-end max-w-3xl mx-auto">
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Attach file"
            className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-base transition-all"
            style={{ border: '1px solid var(--theme-border)', background: 'var(--theme-surface)', color: 'var(--theme-text-muted)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--theme-border-hover)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--theme-border)'}
          >
            📎
          </button>

          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => { setInput(e.target.value); autoResize() }}
            onKeyDown={handleKeyDown}
            placeholder="Message… (Shift+Enter for newline)"
            rows={1}
            className="flex-1 px-4 py-2.5 text-sm rounded-xl outline-none transition-all resize-none"
            style={{
              background: 'var(--theme-surface)',
              border: '1px solid var(--theme-border)',
              color: 'var(--theme-text)',
              maxHeight: '200px',
              overflowY: 'auto',
            }}
            onFocus={e => e.currentTarget.style.borderColor = 'rgba(214,183,71,0.5)'}
            onBlur={e => e.currentTarget.style.borderColor = 'var(--theme-border)'}
          />

          <button
            onClick={sendMessage}
            disabled={loading || (!input.trim() && attachments.length === 0)}
            className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: '#d6b747' }}
          >
            <svg className="w-4 h-4 rotate-90" fill="#000" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        <p className="text-center text-xs mt-2.5" style={{ color: 'var(--theme-text-faint)' }}>
          WebLLM · {MODELS.find(m => m.id === model)?.label} · runs in your browser
        </p>
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
