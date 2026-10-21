import { elections } from '../../../src/data/demo';
export const store = { elections: [...elections], votes: 0, audit: [] as {action:string;at:string}[] };
export function audit(action:string){store.audit.unshift({action,at:new Date().toISOString()});}
