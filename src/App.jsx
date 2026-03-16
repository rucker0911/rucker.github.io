import { useState } from 'react'
import './App.css'
import './reference-style.css'
import './layout.css'

function App() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)

  const closeOverlay = () => {
    setLeftOpen(false)
    setRightOpen(false)
  }

  return (
    <div className="blog-layout">
      {/* 手機頂列：品牌 + 開關側欄按鈕 */}
      <header className="blog-layout__mobile-bar">
        <span className="blog-layout__mobile-bar-brand">Rucker</span>
        <div className="blog-layout__mobile-bar-actions">
          <button
            type="button"
            className="blog-layout__mobile-btn"
            onClick={() => setLeftOpen(true)}
            aria-label="開啟導航"
          >
            ☰
          </button>
          <button
            type="button"
            className="blog-layout__mobile-btn"
            onClick={() => setRightOpen(true)}
            aria-label="開啟側欄"
          >
            ⋮
          </button>
        </div>
      </header>

      {/* 點擊遮罩關閉側欄 */}
      <div
        className={`blog-layout__overlay ${leftOpen || rightOpen ? 'is-visible' : ''}`}
        onClick={closeOverlay}
        onKeyDown={(e) => e.key === 'Escape' && closeOverlay()}
        role="button"
        tabIndex={0}
        aria-label="關閉選單"
      />

      {/* 左側：導航 */}
      <aside className={`blog-layout__left ${leftOpen ? 'is-open' : ''}`}>
        <div className="blog-layout__brand">Rucker</div>
        <nav>
          <ul className="blog-layout__nav">
            <li className="blog-layout__nav-item">
              <a href="#home" className="blog-layout__nav-link blog-layout__nav-link--active">首頁</a>
            </li>
            <li className="blog-layout__nav-item">
              <a href="#posts" className="blog-layout__nav-link">文章</a>
            </li>
            <li className="blog-layout__nav-item">
              <a href="#projects" className="blog-layout__nav-link">專案</a>
            </li>
            <li className="blog-layout__nav-item">
              <a href="#about" className="blog-layout__nav-link">關於</a>
            </li>
            <li className="blog-layout__nav-item">
              <a href="#contact" className="blog-layout__nav-link">聯絡</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 主內容 */}
      <main className="blog-layout__main">
        <div className="blog-layout__main-inner">
          <h1 style={{ color: '#ACD6FF', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Hi, 我是 Rucker</h1>
          <p style={{ color: '#aaa', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            用 React + Vite 建置的個人網站，三欄版面（左窄 + 中寬 + 右窄），手機可收合側欄。
          </p>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>
            主內容區：之後可放文章列表、搜尋、分頁等。
          </p>
        </div>
      </main>

      {/* 右側：最近文章 / 關於我 等 */}
      <aside className={`blog-layout__right ${rightOpen ? 'is-open' : ''}`}>
        <h2 className="blog-layout__aside-title">最近文章</h2>
        <p style={{ color: '#888', fontSize: '0.85rem' }}>（尚未有貼文）</p>
        <h2 className="blog-layout__aside-title" style={{ marginTop: '1.25rem' }}>關於</h2>
        <p style={{ color: '#aaa', fontSize: '0.9rem' }}>軟體工程師，Python / React。</p>
      </aside>
    </div>
  )
}

export default App
