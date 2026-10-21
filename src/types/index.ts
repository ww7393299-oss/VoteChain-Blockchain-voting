export type ElectionStatus = 'UPCOMING' | 'LIVE' | 'CLOSED' | 'RESULTS PUBLISHED';

export type Election = {
  id: string;
  title: string;
  org: string;
  description: string;
  status: ElectionStatus;
  start: string;
  end: string;
  candidates: number;
  eligible: string;
  network: string;
  contractAddress?: string;
  participation?: number;
};

export type Candidate = {
  id: string;
  name: string;
  position: string;
  bio: string;
  manifesto: string;
  votes: number;
};

export type WalletState = {
  connected: boolean;
  address: string;
  network: string;
};

export type VoteReceipt = {
  id: string;
  electionId: string;
  electionTitle: string;
  timestamp: string;
  transactionHash: string;
  blockNumber: number;
  network: string;
  candidateCommitment: string;
  status: 'CONFIRMED';
};
