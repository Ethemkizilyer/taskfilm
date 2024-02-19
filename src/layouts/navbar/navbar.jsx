import React from "react";
import "./navbar.css";
import Scrollspy from "react-scrollspy";

const Navbar = () => {
    return (
        
       <div className="nav">
            <div className="nav-header">
                <div className="nav-title">
                    <a href="#home">
                        TMDB
                    </a>
                </div>
            </div>
            <div className="nav-links">
                <Scrollspy
              className="scrollspy"
              currentClassName={"current"}
              scrolledPastClassName={"scrolled"}
              items={["section-1", "section-2"]}
          >
                <a href="#section-1">
                    Popular Movies
                </a>
                <a href="#section-2">
                    Popular TV Series
                </a>
                </Scrollspy>
            </div>
      </div>
    )
}

export default Navbar
