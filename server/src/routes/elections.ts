import { Router } from 'express';
import { store } from '../services/store';
export const electionsRouter = Router();
electionsRouter.get('/', (_,res)=>res.json(store.elections));
electionsRouter.get('/:id',(req,res)=>{const item=store.elections.find(e=>e.id===req.params.id);if(!item)return res.status(404).json({message:'Election not found'});res.json(item)});
