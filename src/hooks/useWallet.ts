import { useCallback, useState } from 'react';
import { storage } from '../services/storage';
import type { WalletState } from '../types';

const demoAddress = '0x7A92B6D1E84C91F2A9D2C44E92F1';

export function useWallet() {
  const [wallet, setWallet] = useState<WalletState>(() => storage.wallet());
  const connect = useCallback(() => {
    const next = { connected: true, address: demoAddress, network: 'Sepolia' };
    storage.saveWallet(next); setWallet(next); return next;
  }, []);
  const disconnect = useCallback(() => {
    const next = { connected: false, address: '', network: 'Sepolia' };
    storage.saveWallet(next); setWallet(next);
  }, []);
  return { wallet, connect, disconnect };
}
