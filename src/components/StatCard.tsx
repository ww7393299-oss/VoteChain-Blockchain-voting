import type { LucideIcon } from 'lucide-react';
export default function StatCard({ icon: Icon, value, label, trend }: { icon: LucideIcon; value: string; label: string; trend?: string }) { return <div className="metric-card"><Icon/><strong>{value}</strong><span>{label}</span>{trend && <small>{trend}</small>}</div>; }
