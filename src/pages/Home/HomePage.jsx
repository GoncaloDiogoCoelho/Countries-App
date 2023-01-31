import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/countries" style={{ textDecoration: "none" }}>
        <h4 className="link-dashboard">Countries</h4>
      </Link>
    </div>
  )
}

export default HomePage
