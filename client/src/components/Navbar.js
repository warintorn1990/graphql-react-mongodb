import Raact from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">ReactGraphQL</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-link" to="/">Messages</Link>
      <Link className="nav-link" to="/new-message">New Message</Link>
    </div>
  </div>
</nav>
)