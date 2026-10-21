import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { storage } from '../services/storage';
import { useWallet } from '../hooks/useWallet';
import type { VoteReceipt } from '../types';

type User = { name: string; email: string; role: 'VOTER' | 'ADMIN' } | null;
type AppContextValue = {
  user: User; wallet: ReturnType<typeof useWallet>['wallet']; receipts: VoteReceipt[];
  connectWallet: () => void; disconnectWallet: () => void; login: (email: string, password: string) => void;
  logout: () => void; saveReceipt: (receipt: VoteReceipt) => void;
};
const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(() => storage.user());
  const [receipts, setReceipts] = useState<VoteReceipt[]>(() => storage.receipts());
  const { wallet, connect, disconnect } = useWallet();
  const value = useMemo(() => ({
    user, wallet, receipts,
    connectWallet: () => connect(), disconnectWallet: () => disconnect(),
    login: (email: string, _password: string) => {
      const role = email.toLowerCase().includes('admin') ? 'ADMIN' : 'VOTER';
      const next = { name: role === 'ADMIN' ? 'VoteChain Admin' : 'Demo Voter', email, role } as const;
      storage.saveUser(next); setUser(next);
    },
    logout: () => { localStorage.removeItem('votechain.user'); setUser(null); },
    saveReceipt: (receipt: VoteReceipt) => setReceipts(storage.addReceipt(receipt)),
  }), [user, wallet, receipts, connect, disconnect]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useApp() { const ctx = useContext(AppContext); if (!ctx) throw new Error('useApp must be used inside AppProvider'); return ctx; }
