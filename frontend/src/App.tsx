import { FormEvent, useMemo, useState } from 'react'
import { Activity, ArrowUpRight, CheckCircle2, Clock3, Github, Inbox, LayoutDashboard, Plus, Search, Send, X } from 'lucide-react'

type Item = {
  id: string
  title: string
  contact: string
  direction: 'Reçu' | 'Envoyé'
  status: 'À traiter' | 'En cours' | 'Terminé'
  date: string
}

const initialItems: Item[] = [
  { id: 'DEMO-001', title: 'Demande de présentation', contact: 'Studio Horizon', direction: 'Reçu', status: 'À traiter', date: 'Aujourd’hui, 09:30' },
  { id: 'DEMO-002', title: 'Confirmation de rendez-vous', contact: 'Projet Nova', direction: 'Envoyé', status: 'Terminé', date: 'Hier, 16:10' },
  { id: 'DEMO-003', title: 'Retour sur la proposition', contact: 'Collectif Atlas', direction: 'Reçu', status: 'En cours', date: 'Hier, 11:45' },
  { id: 'DEMO-004', title: 'Compte rendu de réunion', contact: 'Équipe Démonstration', direction: 'Envoyé', status: 'Terminé', date: '22 août, 14:20' },
]

const profileUrl = import.meta.env.VITE_PROFILE_URL || 'https://github.com/Medi20197'

export default function App() {
  const [items, setItems] = useState<Item[]>(initialItems)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'Tous' | Item['status']>('Tous')
  const [showForm, setShowForm] = useState(false)

  const filtered = useMemo(() => items.filter(item => {
    const matchesQuery = `${item.title} ${item.contact} ${item.id}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (filter === 'Tous' || item.status === filter)
  }), [items, query, filter])

  const counts = {
    total: items.length,
    pending: items.filter(item => item.status === 'À traiter').length,
    active: items.filter(item => item.status === 'En cours').length,
    done: items.filter(item => item.status === 'Terminé').length,
  }

  const addItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setItems(current => [{
      id: `DEMO-${String(current.length + 1).padStart(3, '0')}`,
      title: String(data.get('title')),
      contact: String(data.get('contact')),
      direction: data.get('direction') as Item['direction'],
      status: 'À traiter',
      date: 'À l’instant',
    }, ...current])
    setShowForm(false)
  }

  const advance = (id: string) => setItems(current => current.map(item => item.id !== id ? item : {
    ...item,
    status: item.status === 'À traiter' ? 'En cours' : 'Terminé'
  }))

  return (
    <div className="app-shell">
      <div className="demo-notice">Démonstration portfolio indépendante · données entièrement fictives · aucune règle interne reproduite</div>
      <header>
        <a className="brand" href="#top"><span className="brand-mark"><Send size={20} /></span><span>MailFlow</span></a>
        <a className="profile-link" href={profileUrl} target="_blank" rel="noreferrer"><Github size={18} /> Profil GitHub <ArrowUpRight size={15} /></a>
      </header>

      <main id="top">
        <aside>
          <nav>
            <a className="active" href="#dashboard"><LayoutDashboard size={18} /> Vue d’ensemble</a>
            <a href="#activity"><Activity size={18} /> Activité récente</a>
          </nav>
          <div className="privacy-card"><strong>Version publique</strong><p>Cette interface illustre uniquement le design et les interactions générales du produit.</p></div>
        </aside>

        <section className="content" id="dashboard">
          <div className="hero">
            <div><p className="eyebrow">PORTFOLIO PRODUIT</p><h1>Tableau de bord</h1><p>Une démonstration générique de suivi, conçue sans données ni processus confidentiels.</p></div>
            <button className="primary" onClick={() => setShowForm(true)}><Plus size={18} /> Ajouter un élément fictif</button>
          </div>

          <div className="stats">
            <Stat icon={<Inbox />} label="Total" value={counts.total} tone="blue" />
            <Stat icon={<Clock3 />} label="À traiter" value={counts.pending} tone="amber" />
            <Stat icon={<Activity />} label="En cours" value={counts.active} tone="violet" />
            <Stat icon={<CheckCircle2 />} label="Terminés" value={counts.done} tone="green" />
          </div>

          <div className="panel" id="activity">
            <div className="panel-head">
              <div><h2>Activité récente</h2><p>Contenu fictif modifiable localement pendant votre visite.</p></div>
              <div className="controls">
                <label className="search"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Rechercher…" /></label>
                <select value={filter} onChange={e => setFilter(e.target.value as typeof filter)}>
                  <option>Tous</option><option>À traiter</option><option>En cours</option><option>Terminé</option>
                </select>
              </div>
            </div>
            <div className="table-wrap"><table><thead><tr><th>Identifiant fictif</th><th>Objet</th><th>Contact fictif</th><th>Type</th><th>Statut</th><th>Date</th><th></th></tr></thead>
              <tbody>{filtered.map(item => <tr key={item.id}><td className="mono">{item.id}</td><td className="title-cell">{item.title}</td><td>{item.contact}</td><td>{item.direction}</td><td><span className={`status ${item.status.replace(' ', '-').toLowerCase()}`}>{item.status}</span></td><td>{item.date}</td><td>{item.status !== 'Terminé' && <button className="advance" onClick={() => advance(item.id)}>Avancer</button>}</td></tr>)}</tbody>
            </table>{filtered.length === 0 && <div className="empty">Aucun résultat pour cette recherche.</div>}</div>
          </div>
        </section>
      </main>

      {showForm && <div className="overlay" onMouseDown={() => setShowForm(false)}><form className="modal" onSubmit={addItem} onMouseDown={e => e.stopPropagation()}><button type="button" className="close" onClick={() => setShowForm(false)}><X /></button><p className="eyebrow">DONNÉES FICTIVES</p><h2>Nouvel élément</h2><p>Ajoutez un exemple temporaire à la démonstration.</p><label>Objet<input name="title" required placeholder="Ex. Demande d’information" /></label><label>Contact fictif<input name="contact" required placeholder="Ex. Organisation Exemple" /></label><label>Type<select name="direction"><option>Reçu</option><option>Envoyé</option></select></label><button className="primary" type="submit"><Plus size={18} /> Ajouter à la démo</button></form></div>}
    </div>
  )
}

function Stat({ icon, label, value, tone }: { icon: React.ReactNode, label: string, value: number, tone: string }) {
  return <div className="stat"><span className={`stat-icon ${tone}`}>{icon}</span><div><span>{label}</span><strong>{value}</strong></div></div>
}
