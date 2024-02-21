import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };
    return (
        
       <div className="nav">
            <div className="nav-header">
                <div className="nav-title">
                    <a href="#home" onClick={() => handleClick('#home')}>
                        TMDB
                    </a>
                </div>
            </div>
            <div className="nav-links">
        
                <a href="#section-1"
        className={activeLink === '#section-1' ? 'active' : ''}
        onClick={() => handleClick('#section-1')}>
                    Popular Movies
                </a>
                <a href="#section-2"
        className={activeLink === '#section-2' ? 'active' : ''}
        onClick={() => handleClick('#section-2')}>
                    Popular TV Series
                </a>
            
            </div>
      </div>
    )
}

export default Navbar
