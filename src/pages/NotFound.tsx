import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="page center-page"><span className="kicker">404</span><h1>Page not found.</h1><p>The route you requested does not exist in this VoteChain demo.</p><Link className="primary" to="/">Return home</Link></section>}
