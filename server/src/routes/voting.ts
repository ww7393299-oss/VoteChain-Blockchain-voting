import { Router } from 'express';
import crypto from 'node:crypto';
import { store, audit } from '../services/store';
export const votingRouter=Router();
votingRouter.post('/prepare',(req,res)=>{const {electionId,candidateId,walletAddress}=req.body;if(!electionId||!candidateId||!walletAddress)return res.status(400).json({message:'electionId, candidateId and walletAddress are required'});const hash='0x'+crypto.createHash('sha256').update(`${electionId}:${candidateId}:${walletAddress}:${Date.now()}`).digest('hex');store.votes++;audit(`Prepared demo vote for ${electionId}`);res.json({mode:'demo',transactionHash:hash,blockNumber:19482774,network:'Sepolia'});});
votingRouter.get('/receipt/:hash',(req,res)=>res.json({transactionHash:req.params.hash,status:'CONFIRMED',network:'Sepolia',blockNumber:19482774}));
