import { X } from 'lucide-react';
import type { ReactNode } from 'react';
export default function Modal({ open, title, children, onClose }: { open: boolean; title: string; children: ReactNode; onClose: () => void }) {
  if (!open) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={e => e.stopPropagation()}><div className="modal-head"><h3>{title}</h3><button onClick={onClose} aria-label="Close"><X size={18}/></button></div>{children}</div></div>;
}
