import type { VoteReceipt, WalletState } from '../types';

const KEYS = { wallet: 'votechain.wallet', receipts: 'votechain.receipts', user: 'votechain.user' } as const;

function read<T>(key: string, fallback: T): T {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) as T : fallback; }
  catch { return fallback; }
}

export const storage = {
  wallet: () => read<WalletState>(KEYS.wallet, { connected: false, address: '', network: 'Sepolia' }),
  saveWallet: (value: WalletState) => localStorage.setItem(KEYS.wallet, JSON.stringify(value)),
  receipts: () => read<VoteReceipt[]>(KEYS.receipts, []),
  addReceipt: (receipt: VoteReceipt) => {
    const next = [receipt, ...storage.receipts()].slice(0, 20);
    localStorage.setItem(KEYS.receipts, JSON.stringify(next));
    return next;
  },
  user: () => read<{ name: string; email: string; role: 'VOTER' | 'ADMIN' } | null>(KEYS.user, null),
  saveUser: (user: { name: string; email: string; role: 'VOTER' | 'ADMIN' }) => localStorage.setItem(KEYS.user, JSON.stringify(user)),
  clear: () => Object.values(KEYS).forEach(k => localStorage.removeItem(k)),
};
