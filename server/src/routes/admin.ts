import { Router } from 'express';
import { store, audit } from '../services/store';
export const adminRouter=Router();
adminRouter.get('/stats',(_,res)=>res.json({elections:store.elections.length,votes:store.votes,auditEvents:store.audit.length,health:'healthy'}));
adminRouter.post('/audit',(req,res)=>{audit(req.body.action||'Admin action');res.json({success:true});});
