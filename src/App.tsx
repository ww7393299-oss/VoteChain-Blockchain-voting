import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Elections from './pages/Elections';
import ElectionDetails from './pages/ElectionDetails';
import Vote from './pages/Vote';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { How, Security, Verification } from './pages/Info';
import Results from './pages/Results';
import Docs from './pages/Docs';
import { AppProvider } from './context/AppContext';

export default function App(){
  return <AppProvider><Routes>
    <Route path="/login" element={<Auth/>}/>
    <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/><Route path="/elections" element={<Elections/>}/>
      <Route path="/elections/:id" element={<ElectionDetails/>}/><Route path="/vote" element={<Vote/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/><Route path="/profile" element={<Profile/>}/>
      <Route path="/admin" element={<Admin/>}/><Route path="/how-it-works" element={<How/>}/>
      <Route path="/security" element={<Security/>}/><Route path="/verification" element={<Verification/>}/>
      <Route path="/results" element={<Results/>}/><Route path="/docs" element={<Docs/>}/><Route path="*" element={<NotFound/>}/>
    </Route>
  </Routes></AppProvider>
}
