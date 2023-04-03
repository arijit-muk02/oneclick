import React from 'react'
import '../assets/Hero.css'
import Links from './Links'

export default function Hero() {
  return (
    <>
    <div className="hero">
        <div className="container">
            <nav className="navbar search">
                <div className="container-fluid" style={{display: "flex" ,justifyContent: "center"}}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button type="submit">Search</button>
                    </form>
                    <small style={{color:"white"}}>Suggestions : Electricians, house help, buy speaker, etc.</small>
                </div>
            </nav>
        </div>
    </div>
    <Links/>
    </>
  )
}
