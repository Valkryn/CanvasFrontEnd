import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, handleLogout }) => {


  return (
    <header className="nav">

      <div className="gallerSeven">
        <Link to="/"> Gallery Seven </Link>
      </div>

      <div className="what">
        whats popping?
      </div>

      <div className="dont">
        dont mind me just watching
      </div>

      <div className="profile">
        {currentUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
      </div>

    </header>
  )
}

export default NavBar
