import { useMemo, useState } from 'react';
import { Activity, CheckCircle2, Plus, ShieldAlert, Users, Vote, XCircle } from 'lucide-react';
import { elections } from '../data/demo';
import AdminSidebar from '../components/admin/AdminSidebar';
import StatCard from '../components/StatCard';
import Modal from '../components/Modal';
import { useApp } from '../context/AppContext';

export default function Admin(){
  const { user } = useApp();
  const [open,setOpen]=useState(false); const [title,setTitle]=useState(''); const [notice,setNotice]=useState('');
  const live=elections.filter(e=>e.status==='LIVE').length;
  const total=elections.reduce((n,e)=>n+Number(e.eligible.replace(',','')),0);
  const recent=useMemo(()=>elections.slice(0,3),[]);
  if(user?.role!=='ADMIN') return <section className="page"><div className="notice"><ShieldAlert/><div><strong>Admin access required.</strong><p>Login with an email containing “admin” to enter the demonstration console.</p></div></div></section>;
  return <section className="page admin-page"><div className="admin-layout"><AdminSidebar/><div className="admin-main"><div className="admin-title"><div><span className="kicker">OPERATIONS CENTER</span><h1>Election control room.</h1><p>Monitor elections, eligibility, audit events and platform health from one place.</p></div><button className="primary" onClick={()=>setOpen(true)}><Plus size={16}/> New election</button></div><div className="metric-grid"><StatCard icon={Vote} value={String(elections.length)} label="Total elections" trend="All environments"/><StatCard icon={Activity} value={String(live)} label="Live elections" trend="Real-time demo state"/><StatCard icon={Users} value={total.toLocaleString()} label="Eligible voters" trend="Across configured elections"/></div><div className="admin-grid"><div className="admin-panel"><div className="panel-head"><h2>Election operations</h2><span>DEMO CONTROL PLANE</span></div>{recent.map(e=><div className="admin-row" key={e.id}><div><strong>{e.title}</strong><small>{e.id} • {e.org}</small></div><span className={`status-dot ${e.status==='LIVE'?'live':''}`}>{e.status}</span><button className="ghost" onClick={()=>setNotice(`${e.id} audit controls opened in demo mode.`)}>Manage</button></div>)}</div><div className="admin-panel"><div className="panel-head"><h2>Security monitor</h2><span>HEALTHY</span></div><div className="health"><CheckCircle2/><div><strong>Smart contract adapter</strong><small>Ready for testnet configuration</small></div></div><div className="health"><CheckCircle2/><div><strong>Audit event pipeline</strong><small>All demo events traceable</small></div></div><div className="health"><XCircle/><div><strong>Production signing</strong><small>Disabled until real wallet setup</small></div></div></div></div></div></div><Modal open={open} title="Create election" onClose={()=>setOpen(false)}><label className="modal-label">Election title<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Engineering Council 2026"/></label><button className="primary full" onClick={()=>{setNotice(title?`Draft “${title}” created locally. Connect the API/database to persist it.`:'Enter an election title first.');setOpen(false)}}><Plus size={16}/> Create draft</button></Modal>{notice&&<div className="toast" onClick={()=>setNotice('')}>{notice}</div>}</section>;
}
