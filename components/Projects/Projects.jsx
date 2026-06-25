'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './Projects.module.css'

const ComputerCanvas = dynamic(() => import('../canvas/ComputerCanvas'), { ssr: false })

const projects = [
  {
    icon: '🏆',
    iconClass: 'award',
    name: 'AWS Hackathon 2026 — Breaking Barriers',
    org: 'AWS × Race Against Dementia',
    badge: 'award',
    badgeText: '🏆 Hackathon',
    category: 'web',
    desc: 'Full-stack web app on AWS for Race Against Dementia charity. AI-powered academic paper analysis & peer review system — reduced review time from 6–12 months to instant and cost from £5,000 to £0.',
    stack: ['AWS', 'S3', 'Lambda', 'CloudFormation', 'Full-Stack', 'AI Analysis'],
    featured: true,
  },
  {
    icon: '🎙️',
    name: 'AI Voice Agent',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Real-time speech-to-speech conversational assistant. Hold to talk — your voice goes through Whisper STT, Claude API, and ElevenLabs TTS in seconds.',
    stack: ['Python', 'FastAPI', 'React', 'Whisper', 'Claude API', 'ElevenLabs'],
  },
  {
    icon: '🕷️',
    name: 'Autonomous Web Scraping Agent',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Give it a natural language goal and it plans and executes multi-step web scraping autonomously using Claude tool use and a Playwright browser, returning structured JSON.',
    stack: ['Python', 'FastAPI', 'React', 'Claude API', 'Playwright'],
  },
  {
    icon: '🧠',
    name: 'Multi-Agent Research Assistant',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'LangGraph-orchestrated pipeline with specialist agents that search the web, summarise findings, and compile fully cited research reports on any topic.',
    stack: ['Python', 'FastAPI', 'React', 'LangGraph', 'Claude API'],
  },
  {
    icon: '📚',
    name: 'RAG Knowledge Base Builder',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Upload PDFs, URLs, or plain text to build a ChromaDB vector store, then chat with your documents via a LangChain + Claude-powered Q&A interface with source citations.',
    stack: ['Python', 'FastAPI', 'React', 'LangChain', 'ChromaDB', 'Claude API'],
  },
  {
    icon: '🔬',
    name: 'Multi-Model Benchmark Arena',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Runs the same prompt through Claude, GPT-4, and Ollama simultaneously, scoring each response against a rubric and comparing latency and cost side by side.',
    stack: ['Python', 'FastAPI', 'React', 'Claude API', 'OpenAI', 'Ollama'],
  },
  {
    icon: '✍️',
    name: 'Prompt Optimisation Tool',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Iteratively rewrites prompts using the Claude API, scoring each version against a custom rubric and tracking improvement over rounds in a live React dashboard.',
    stack: ['Python', 'FastAPI', 'React', 'Claude API'],
  },
  {
    icon: '💼',
    name: 'AI Job Screener',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Paste a job description and your resume to get an AI match score, skills gap analysis, and a tailored cover letter generated in seconds.',
    stack: ['Python', 'FastAPI', 'React', 'Claude API'],
  },
  {
    icon: '🤖',
    name: 'GitHub PR Review Bot',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'GitHub Actions bot that automatically posts line-level AI code review comments with severity scores on every pull request — zero config beyond adding your API key.',
    stack: ['Python', 'GitHub Actions', 'Claude API'],
  },
  {
    icon: '💪',
    name: 'AI-Powered Fitness Recommendation System',
    org: 'Final Year Project, Brunel University — 2023/24',
    badge: 'academic',
    badgeText: 'Academic',
    category: 'ml',
    desc: 'ML fitness recommendation engine with separate models for muscle gain, fat loss, and strength training. Achieved 100% user testing success with a full-stack React application.',
    stack: ['Python', 'Machine Learning', 'React.js', 'Classification', 'REST API'],
  },
  {
    icon: '🫁',
    name: 'Medical Imaging Classifier',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Transfer-learning model (ResNet18) trained on chest X-rays to classify pneumonia vs normal with 95%+ accuracy, including Grad-CAM heatmap visualisation of the decision region.',
    stack: ['Python', 'PyTorch', 'Streamlit', 'Grad-CAM', 'ResNet18'],
  },
  {
    icon: '⚽',
    name: 'Football Player Performance Predictor',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Uses StatsBomb open data to train ensemble ML models that predict next-season goals, assists, and xG for any player with interactive visualisations.',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly', 'StatsBomb'],
  },
  {
    icon: '💰',
    name: 'Loan Default Risk Scorer',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Predicts the probability of loan default using XGBoost with SHAP waterfall charts for explainability and a credit grade A–F output.',
    stack: ['Python', 'Flask', 'XGBoost', 'SHAP', 'React', 'Vite'],
  },
  {
    icon: '📉',
    name: 'Customer Churn Prediction',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'ML pipeline identifying e-commerce customers likely to churn using Logistic Regression, Random Forest, and XGBoost with SMOTE-based class-imbalance correction.',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'SMOTE', 'Flask'],
  },
  {
    icon: '🔍',
    name: 'Fraud Detection Using Anomaly Detection',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Compares supervised (Neural Network) and unsupervised (Isolation Forest, Autoencoder, One-Class SVM) approaches against extreme class imbalance (~2% fraud rate).',
    stack: ['Python', 'Keras', 'Scikit-learn', 'Isolation Forest', 'Autoencoder'],
  },
  {
    icon: '🎵',
    name: 'Music Data Analysis — Spotify Dataset',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'EDA and ML project investigating what makes songs popular. Applies K-Means and DBSCAN clustering to discover genre groupings and identifies danceability as the top predictor.',
    stack: ['Python', 'K-Means', 'DBSCAN', 'PCA', 'Pandas', 'Seaborn'],
  },
  {
    icon: '⚡',
    name: 'Time Series Forecasting: Energy Consumption',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Forecasts daily energy consumption using ARIMA, Prophet, and LSTM across three years of synthetic data, benchmarking classical, decomposition, and deep learning approaches.',
    stack: ['Python', 'ARIMA', 'Prophet', 'LSTM', 'Keras', 'Statsmodels'],
  },
  {
    icon: '🚌',
    name: 'Predict Public Transport Delays',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Predicts bus and train delays using weather conditions and city events. XGBoost outperforms baselines — precipitation and rush-hour rain are the strongest delay predictors.',
    stack: ['Python', 'XGBoost', 'Random Forest', 'Linear Regression', 'Feature Engineering'],
  },
  {
    icon: '📈',
    name: 'Stock Sentiment Analyser',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Fetches recent news headlines for any ticker, scores sentiment using Claude Haiku, and correlates the sentiment trend against the stock\'s price history in a Streamlit dashboard.',
    stack: ['Python', 'Streamlit', 'Plotly', 'yFinance', 'Claude Haiku'],
  },
  {
    icon: '📊',
    name: 'Algo Trading Backtester',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Backtests Moving Average crossover, RSI, and MACD strategies on any ticker using yFinance data, reporting P&L, Sharpe ratio, and max drawdown via a Streamlit dashboard.',
    stack: ['Python', 'Streamlit', 'Plotly', 'yFinance'],
  },
  {
    icon: '📋',
    name: 'AlphaLedger — Autonomous SEC Intelligence',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Mines 10-K filings across thousands of companies via SEC EDGAR to predict future earnings — zero cost, no Bloomberg. Supports Russell 3000 & S&P 500 with a Streamlit dashboard.',
    stack: ['Python', 'Streamlit', 'SEC EDGAR API', 'NLP', 'Data Analysis'],
  },
  {
    icon: '🗂️',
    name: 'Document to Code Generator',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Accepts API docs, PDFs, or URLs and generates working client SDK code in Python, TypeScript, Go, JavaScript, or cURL using Claude AI.',
    stack: ['Python', 'FastAPI', 'React', 'Claude API'],
  },
  {
    icon: '🔎',
    name: 'AI Code Review Tool',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Paste a GitHub repo URL and get a full AI code review per file — covering security issues, performance problems, and code smells within seconds.',
    stack: ['Python', 'Streamlit', 'Claude API', 'GitHub API'],
  },
  {
    icon: '🎮',
    name: 'AI Dungeon Master',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Claude 3.5 Sonnet acts as a persistent RPG dungeon master with procedural world generation, multiple character classes, and saved world state in SQLite.',
    stack: ['Python', 'FastAPI', 'React', 'Claude API', 'SQLite'],
  },
  {
    icon: '📰',
    name: 'SEC Filing Comparison',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Fetches 10-K filings from SEC EDGAR for any two companies and uses Claude AI to compare risk factors, revenue trends, and narrative tone side by side.',
    stack: ['Python', 'Streamlit', 'Claude API', 'SEC EDGAR API'],
  },
  {
    icon: '🏥',
    name: 'Clinical Trial Summariser',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Searches ClinicalTrials.gov for any condition and uses Claude AI to rewrite complex trial data — eligibility, phase, outcomes — into plain English summaries.',
    stack: ['Python', 'Streamlit', 'Claude API', 'ClinicalTrials.gov API'],
  },
  {
    icon: '💬',
    name: 'Personal Finance AI Assistant',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Upload a bank statement CSV and get AI-powered transaction categorisation, spending breakdowns, savings rate calculation, and budget recommendations.',
    stack: ['Python', 'FastAPI', 'React', 'Chart.js', 'Claude API'],
  },
  {
    icon: '♟️',
    name: 'Chess Engine Analyser',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Upload a PGN game file to get blunder detection, turning-point identification, per-move accuracy scores, and a Claude AI narrative of the game with interactive board.',
    stack: ['Python', 'FastAPI', 'React', 'python-chess', 'Claude API'],
  },
  {
    icon: '📋',
    name: 'IPO Intelligence Dashboard',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Fetches S-1 filings from SEC EDGAR for recent IPOs and uses Claude AI to extract and summarise risk factors, growth potential, and red flags — free, no subscription needed.',
    stack: ['Python', 'Streamlit', 'Claude API', 'SEC EDGAR API'],
  },
  {
    icon: '🐙',
    name: 'GitHub Contribution Analyser',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ai',
    desc: 'Analyses any GitHub username to produce a language heatmap, repo quality scores, and a Claude AI-generated developer archetype profile.',
    stack: ['Python', 'FastAPI', 'React', 'GitHub REST API', 'Claude API'],
  },
  {
    icon: '☁️',
    name: 'Azure AI Document Processor',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Enterprise document intelligence pipeline using Azure Functions, Blob Storage, and Document Intelligence to upload, extract, store, and query documents at scale.',
    stack: ['Python', 'Azure Functions', 'Azure Blob Storage', 'Document Intelligence'],
  },
  {
    icon: '⚙️',
    name: 'Distributed Task Queue Dashboard',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Real Celery + Redis task queue system with a live React dashboard showing worker status, queue depth, and task retries via WebSockets.',
    stack: ['Python', 'FastAPI', 'Celery', 'Redis', 'React', 'Docker'],
  },
  {
    icon: '🌐',
    name: 'Network Latency Mapper',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Probes AWS, Azure, GCP, and Cloudflare endpoints asynchronously and plots latency results on a D3.js world map updating live via WebSockets.',
    stack: ['Python', 'FastAPI', 'React', 'D3.js', 'WebSockets'],
  },
  {
    icon: '🚦',
    name: 'Self-Hosted CI/CD Visualiser',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Hooks into GitHub Actions webhooks and renders live, animated D3.js flow diagrams of your CI/CD pipelines updating in real time as jobs run, pass, or fail.',
    stack: ['Python', 'FastAPI', 'React', 'D3.js', 'GitHub Actions', 'WebSockets'],
  },
  {
    icon: '💸',
    name: 'Infrastructure Cost Estimator',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Side-by-side monthly cost comparison for equivalent AWS vs Azure services — Lambda/Functions, EC2/VM, S3/Blob, RDS/SQL — based on your usage inputs.',
    stack: ['Python', 'FastAPI', 'React', 'AWS Pricing API', 'Azure Pricing API'],
  },
  {
    icon: '🪙',
    name: 'Crypto Arbitrage Scanner',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Monitors Binance, Coinbase, Kraken, and Bitfinex in real time via WebSockets, calculating fee-adjusted arbitrage profit opportunities across exchanges.',
    stack: ['Python', 'FastAPI', 'React', 'WebSockets'],
  },
  {
    icon: '📊',
    name: 'Portfolio Risk Analyser',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Analyses a multi-asset portfolio using yFinance data to compute Sharpe ratio, Value-at-Risk, and correlation heatmaps, with Claude AI generating rebalancing advice.',
    stack: ['Python', 'Streamlit', 'NumPy', 'Plotly', 'Claude API', 'yFinance'],
  },
  {
    icon: '📐',
    name: 'Options Pricing Calculator',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Calculates option prices and Greeks using Black-Scholes, Monte Carlo, and Binomial Tree models, with 3D price surface and payoff diagram visualisations.',
    stack: ['Python', 'Streamlit', 'NumPy', 'SciPy', 'Plotly'],
  },
  {
    icon: '🎮',
    name: 'Game Recommendation Engine',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Pulls your Steam library via the Steam API, clusters games by genre using KMeans, and recommends new titles using cosine similarity on your playtime profile.',
    stack: ['Python', 'FastAPI', 'React', 'Scikit-learn', 'Steam API'],
  },
  {
    icon: '🧪',
    name: 'Fine-tune Experiment Tracker',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Logs loss curves, eval metrics, and sample outputs for ML fine-tuning runs in SQLite, with a React dashboard for comparing experiments side by side.',
    stack: ['Python', 'FastAPI', 'React', 'SQLite'],
  },
  {
    icon: '⚡',
    name: 'API Load Tester',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Runs concurrent load tests against any API endpoint using asyncio + httpx, reporting P50/P95/P99 latency percentiles and error rates in a visual React dashboard.',
    stack: ['Python', 'FastAPI', 'React', 'Chart.js', 'asyncio', 'httpx'],
  },
  {
    icon: '💪',
    name: 'Fitness AI App',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'ml',
    desc: 'Full-stack fitness app with a fine-tuned GPT-2 model running locally to generate personalised workout plans, with workout logging, progress tracking, and challenges.',
    stack: ['React 19', 'Flask', 'Firebase', 'PyTorch', 'GPT-2'],
  },
  {
    icon: '💻',
    name: 'CLI Portfolio Dashboard',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'A Rich terminal UI that pulls your GitHub stats — stars, repos, commit heatmap — via the GitHub API with SQLite caching. Run it with just a username.',
    stack: ['Python', 'Rich', 'GitHub API', 'SQLite'],
  },
  {
    icon: '☁️',
    name: 'Azure CLI MCP Server',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ai',
    desc: 'MCP server enabling natural language control of Azure cloud infrastructure. Engineers can provision, manage, and query Azure resources conversationally.',
    stack: ['Python', 'MCP Protocol', 'Azure CLI', 'LLMs'],
  },
  {
    icon: '🤖',
    name: 'RPA MCP Server',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ai',
    desc: 'Browser and VM automation server using the MCP protocol. Enables agentic control of Windows and Linux virtual machines and web browsers.',
    stack: ['Python', 'MCP Protocol', 'RPA', 'Browser Automation'],
  },
  {
    icon: '📊',
    name: 'Agentic Report Generation Workflow',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ai',
    desc: 'End-to-end agentic workflow that reads Excel campaign data, processes it through an LLM, and automatically pushes reports to Google DV360.',
    stack: ['Python', 'Agentic AI', 'Excel', 'Google DV360', 'LLMs'],
  },
  {
    icon: '🧬',
    name: 'Synthetic Data Generation Pipeline',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ml',
    desc: 'Pipeline to generate high-quality synthetic training data for ML models, enabling safe development without exposing sensitive real-world data.',
    stack: ['Python', 'LLMs', 'Data Engineering', 'ML Pipeline'],
  },
  {
    icon: '📄',
    name: 'TextExtract — ML Training Data Builder',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Web app that extracts clean text from PDFs, Word docs, and URLs then exports structured JSON ready for LLM fine-tuning, with OCR fallback for scanned PDFs.',
    stack: ['Python', 'FastAPI', 'React', 'LangChain', 'pdfplumber', 'Tesseract OCR'],
  },
  {
    icon: '🏎️',
    name: 'F1 Race Replay',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Animates real Formula 1 telemetry data using FastF1 and Python Arcade — GPS position at 50Hz, tyre compounds, DRS, safety car events and live leaderboard.',
    stack: ['Python', 'FastF1', 'Arcade', 'Telemetry', 'Data Visualisation'],
  },
  {
    icon: '🚇',
    name: 'TFL Status — London Transport Live Checker',
    org: 'Personal Project',
    badge: 'personal',
    badgeText: 'Open Source',
    category: 'web',
    desc: 'Real-time London transport status checker covering Tube, Overground, and National Rail via the TFL Open API. Ask in plain English and get live disruption data instantly.',
    stack: ['Next.js', 'TypeScript', 'TFL Open API', 'React'],
  },
]

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai', label: 'Agentic AI' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'web', label: 'Web / Cloud' },
]

function FlipCard({ p }) {
  return (
    <div className={`${styles.flipWrap} ${p.featured ? styles.featured : ''}`}>
      <div className={styles.flipInner}>
        {/* FRONT */}
        <div className={styles.flipFront}>
          <div className={styles.cardTop}>
            <div className={`${styles.projectIcon} ${p.iconClass ? styles[p.iconClass] : ''}`}>
              {p.icon}
            </div>
            <span className={`${styles.badge} ${styles[p.badge]}`}>{p.badgeText}</span>
          </div>
          <div className={styles.projectName}>{p.name}</div>
          <div className={styles.projectOrg}>{p.org}</div>
          <p className={styles.projectDesc}>{p.desc}</p>
        </div>

        {/* BACK */}
        <div className={styles.flipBack}>
          <div className={styles.backHeader}>
            <span className={styles.projectIcon}>{p.icon}</span>
            <span className={styles.backTitle}>{p.name}</span>
          </div>
          <div className={styles.backOrgBadge}>
            <span className={`${styles.badge} ${styles[p.badge]}`}>{p.badgeText}</span>
            <span className={styles.projectOrg}>{p.org}</span>
          </div>
          <p className={styles.backDesc}>{p.desc}</p>
          <div className={styles.backStackLabel}>Tech Stack</div>
          <div className={styles.stackRow}>
            {p.stack.map(t => <span className={styles.tag} key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    const runGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      const el = sectionRef.current
      if (!el) return
      gsap.fromTo(el.querySelectorAll('[data-anim]'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
    }
    runGsap()
  }, [])

  return (
    <section className={styles.section} id="projects" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label" data-anim>04 — Projects</p>
          <h2 className="section-title" data-anim>
            Things I&apos;ve <span className="orange-gradient">Built</span>
          </h2>
        </div>

        {/* 3D Computer */}
        <div className={styles.computerWrap} data-anim>
          <ComputerCanvas />
          <p className={styles.computerHint}>drag to rotate</p>
        </div>

        <div className={styles.filterRow} data-anim style={{ marginTop: '1.5rem' }}>
          {filters.map(f => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${activeFilter === f.key ? styles.active : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <FlipCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
