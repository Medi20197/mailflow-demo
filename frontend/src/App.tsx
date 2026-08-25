import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, CheckCircle2, Github, LayoutDashboard, Mail, Menu, ShieldCheck, Sparkles, Users } from 'lucide-react'

type Project = {
  slug: string; name: string; label: string; description: string; icon: typeof Mail; color: string
  highlights: string[]; metrics: [string, string][]; steps: string[]
}

const projects: Project[] = [
  { slug: 'mailflow', name: 'MailFlow', label: 'Suivi & collaboration', description: 'Une interface générique de suivi des échanges, centrée sur la lisibilité, la recherche et la progression visuelle.', icon: Mail, color: 'blue', highlights: ['Tableau de bord responsive', 'Recherche et filtres instantanés', 'Interactions locales fictives'], metrics: [['24', 'Éléments fictifs'], ['8', 'En cours'], ['92 %', 'Progression démo']], steps: ['Nouvel élément fictif ajouté', 'Statut de démonstration mis à jour', 'Vue synthétique actualisée'] },
  { slug: 'govflow', name: 'GovFlow', label: 'Pilotage de processus', description: 'Une présentation conceptuelle d’un espace de pilotage, sans reprendre de procédure ni de structure organisationnelle réelle.', icon: Building2, color: 'violet', highlights: ['Vue synthétique des initiatives', 'Composants accessibles et cohérents', 'Visualisation générique de progression'], metrics: [['12', 'Initiatives fictives'], ['5', 'Étapes actives'], ['87 %', 'Objectifs démo']], steps: ['Initiative Exemple créée', 'Jalon fictif validé', 'Indicateur de démonstration actualisé'] },
  { slug: 'garde-tranquille', name: 'Garde Tranquille', label: 'Organisation d’équipe', description: 'Une vitrine générique de planification et de coordination, alimentée uniquement par des scénarios inventés.', icon: ShieldCheck, color: 'green', highlights: ['Planning visuel simplifié', 'Répartition fictive des disponibilités', 'Expérience mobile responsive'], metrics: [['18', 'Créneaux fictifs'], ['6', 'Profils démo'], ['100 %', 'Données inventées']], steps: ['Créneau Démo planifié', 'Disponibilité fictive confirmée', 'Aperçu hebdomadaire actualisé'] },
]

const profileUrl = import.meta.env.VITE_PROFILE_URL || 'https://github.com/Medi20197'

export default function App() {
  const [route, setRoute] = useState(location.hash.replace('#/', '') || 'portfolio')
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const sync = () => { setRoute(location.hash.replace('#/', '') || 'portfolio'); setMenuOpen(false); scrollTo(0, 0) }; addEventListener('hashchange', sync); return () => removeEventListener('hashchange', sync) }, [])
  const project = projects.find(item => item.slug === route)

  return <div className="shell">
    <div className="notice">Portfolio public · interfaces fictives · aucune donnée ni règle interne reproduite</div>
    <header>
      <a className="brand" href="#/"><span className="logo"><Sparkles size={19}/></span><span>Portfolio<span className="dot">.</span></span></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><Menu /></button>
      <nav className={menuOpen ? 'open' : ''}>
        <a className={route === 'portfolio' ? 'active' : ''} href="#/">Projets</a>
        {projects.map(item => <a key={item.slug} className={route === item.slug ? 'active' : ''} href={`#/${item.slug}`}>{item.name}</a>)}
      </nav>
      <a className="github" href={profileUrl} target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={14}/></a>
    </header>
    {project ? <ProjectPage project={project}/> : <PortfolioHome/>}
    <footer><span>Portfolio frontend — démonstrations publiques indépendantes</span><a href={profileUrl}>Medi20197 sur GitHub</a></footer>
  </div>
}

function PortfolioHome() {
  return <main className="home">
    <section className="intro"><p className="kicker">SÉLECTION DE PROJETS</p><h1>Des produits numériques clairs,<br/><em>utiles et bien structurés.</em></h1><p>Trois démonstrations frontend reconstruites avec des contenus entièrement fictifs pour présenter le design, l’ergonomie et la qualité d’implémentation.</p></section>
    <section className="project-grid">{projects.map((project, index) => { const Icon = project.icon; return <a className={`project-card ${project.color}`} href={`#/${project.slug}`} key={project.slug}>
      <div className="card-top"><span className="project-number">0{index + 1}</span><span className="project-icon"><Icon/></span></div><p>{project.label}</p><h2>{project.name}</h2><div className="card-description">{project.description}</div><span className="discover">Découvrir le projet <ArrowRight size={17}/></span>
    </a>})}</section>
    <section className="principles"><div><p className="kicker">APPROCHE</p><h2>Ce que ces démonstrations mettent en valeur</h2></div><div className="principle-list"><span><strong>01</strong> Design responsive</span><span><strong>02</strong> Architecture React</span><span><strong>03</strong> Interfaces accessibles</span><span><strong>04</strong> Confidentialité par conception</span></div></section>
  </main>
}

function ProjectPage({ project }: { project: Project }) {
  const Icon = project.icon
  return <main className={`project-page ${project.color}`}>
    <section className="project-hero"><a className="back" href="#/"><ArrowLeft size={16}/> Tous les projets</a><div className="hero-grid"><div><p className="kicker">DÉMONSTRATION PUBLIQUE</p><h1>{project.name}</h1><p>{project.description}</p><div className="chips">{project.highlights.map(item => <span key={item}><CheckCircle2 size={15}/>{item}</span>)}</div></div><div className="hero-visual"><span className="large-icon"><Icon/></span><div><small>PROJET PORTFOLIO</small><strong>{project.name}</strong><p>{project.label}</p></div></div></div></section>
    <section className="demo-area"><div className="demo-toolbar"><div><LayoutDashboard size={19}/><strong>Aperçu de démonstration</strong></div><span>Données fictives</span></div><div className="metrics">{project.metrics.map(([value,label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="demo-columns"><div className="activity-panel"><div className="panel-title"><h3>Activité récente</h3><span>Vue illustrative</span></div>{project.steps.map((step,index) => <div className="activity-row" key={step}><span className="avatar">{index + 1}</span><div><strong>{step}</strong><small>Exemple fictif · il y a {index + 1} h</small></div><span className="pill">Démo</span></div>)}</div><div className="quality-panel"><Users/><h3>Expérience produit</h3><p>Une interface pensée pour rester claire sur ordinateur comme sur mobile.</p><div className="progress"><span style={{width:'88%'}}/></div><small>Qualité visuelle illustrative</small></div></div></section>
    <section className="disclaimer"><ShieldCheck/><div><strong>Confidentialité par conception</strong><p>Cette page a été créée spécialement pour le portfolio. Elle n’expose aucune donnée, aucun schéma et aucune logique du produit d’origine.</p></div></section>
  </main>
}
