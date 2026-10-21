import axios from 'axios';
import type { Election, VoteReceipt } from '../types';

const client = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api', timeout: 5000 });

export const api = {
  health: () => client.get('/health'),
  elections: () => client.get<Election[]>('/elections'),
  prepareVote: (payload: { electionId: string; candidateId: string; walletAddress: string }) => client.post('/voting/prepare', payload),
  receipt: (hash: string) => client.get<VoteReceipt>(`/voting/receipt/${hash}`),
  adminStats: () => client.get('/admin/stats'),
};
