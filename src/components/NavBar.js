import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, handleLogout }) => {


  return (
    <header className="nav">

      <div className="gallerSeven">
        <Link to="/"> Canvas By G7 </Link>
      </div>

      <div className="learn">
        Learn
      </div>

      <div className="forYou">
        For you
      </div>

      <div className="live">
      Live Feed
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
