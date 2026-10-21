import { Wallet, ShieldCheck } from 'lucide-react';
import Modal from './Modal';
import { useApp } from '../context/AppContext';
export default function WalletModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { wallet, connectWallet } = useApp();
  return <Modal open={open} title="Connect wallet" onClose={onClose}><div className="wallet-choice"><div className="wallet-icon"><Wallet/></div><div><strong>Demo Web3 Wallet</strong><p>Safe simulation mode. No private key is requested.</p></div></div><button className="primary full" onClick={() => { connectWallet(); onClose(); }}><ShieldCheck size={16}/> {wallet.connected ? 'Wallet connected' : 'Connect demo wallet'}</button><small className="modal-note">Network: Sepolia testnet • Demo only</small></Modal>;
}
