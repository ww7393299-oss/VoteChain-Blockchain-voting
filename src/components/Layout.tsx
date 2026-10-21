import { ReactNode, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Wallet, ShieldCheck, UserCircle, LayoutDashboard } from 'lucide-react';
import WalletModal from './WalletModal';
import { useApp } from '../context/AppContext';

export default function Layout({children}:{children?:ReactNode}){
  const [open,setOpen]=useState(false); const [walletOpen,setWalletOpen]=useState(false); const {wallet,user}=useApp();
  const nav=[['/elections','Elections'],['/how-it-works','How It Works'],['/security','Security'],['/verification','Verify']];
  return <div className="app"><header className="nav"><Link to="/" className="brand"><span className="brandmark"><ShieldCheck size={19}/></span>VOTE<span>CHAIN</span></Link><nav className={open?'mobile-open':''}>{nav.map(([to,l])=><NavLink key={to} to={to} onClick={()=>setOpen(false)}>{l}</NavLink>)}{user?.role==='ADMIN'&&<NavLink to="/admin" onClick={()=>setOpen(false)}>Admin</NavLink>}<Link className="nav-login" to={user?'/profile':'/login'}>{user?<UserCircle size={15}/>:null}{user?'Account':'Login'}</Link><button className="wallet-btn" onClick={()=>setWalletOpen(true)}><Wallet size={16}/>{wallet.connected?`${wallet.address.slice(0,6)}…${wallet.address.slice(-4)}`:'Connect Wallet'}</button></nav><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header><main><Outlet /></main><footer><div><div className="brand"><span className="brandmark"><ShieldCheck size={18}/></span>VOTECHAIN</div><p>Vote with confidence. Verify without compromise.</p></div><div className="footlinks"><Link to="/elections">Elections</Link><Link to="/dashboard">Dashboard</Link><Link to="/security">Security</Link><Link to="/verification">Verification</Link><Link to="/docs">Documentation</Link></div><small>© 2026 VoteChain. Educational demonstration platform.</small></footer><WalletModal open={walletOpen} onClose={()=>setWalletOpen(false)}/></div>
}
