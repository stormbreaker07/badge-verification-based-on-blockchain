import React from 'react';
 import {Link , NavLink} from 'react-router-dom';
 import ls from 'local-storage';


function NavBar()
{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#">MyWebsite.Com</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
        Home 
        <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/profile">
        Profile
        <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    </div>
        </div>
  
</nav>
</div>
    )
}

export default NavBar;