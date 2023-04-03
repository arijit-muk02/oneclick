import React from 'react'
import '../assets/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
     <div className="container">
        <nav className="navbar fixed-top navbar-expand-lg " style={{padding:"0 40px" ,backgroundColor: "white"}}>
            <div className="container-fluid">
                <a href="/"><img width="70px" src="images/jobforall.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    
                    <li className="nav-item" style={{paddingRight: "20px"}}>
                    <Link to="/login" className="nav-link text-center" ><i
                                className="fa-solid fa-helmet-safety"></i>Join</Link>
                    </li>
                    <li className="nav-item" style={{paddingRight: "20px"}}>
                        <a className="nav-link text-center" href=""><i className="fa-solid fa-phone"></i>Contact</a>
                    </li>
                    <li className="nav-item" style={{paddingRight: "20px"}}>
                        <a id="sign-in" className="nav-link text-center"><i
                                className="fa-solid fa-right-to-bracket"></i>Login/SignUp</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}
