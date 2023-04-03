import React from 'react'
import '../assets/Footer.css'
export default function Footer() {
  return (
    <footer>
            <div className="container">
                <div className="wrapper-footer">

                    <div className="item main">
                        <img src="images/jobforall.png" width="50%" alt=""/> <br/>
                        <p><em>Social</em></p>
                        <i className="fa-br/ands fa-square-facebook"></i>
                        <i className="fa-br/ands fa-square-instagram"></i>
                        <i className="fa-br/ands fa-linkedin"></i>
                        <i className="fa-br/ands fa-square-twitter"></i>
                    </div>

                    <div className="item">
                        <p>Company</p>
                        <small>About Us</small> <br/>
                        <small>Blog</small><br/>
                        <small>Join us as worker</small><br/>
                        <a href="/"><small>Admin</small></a> <br/>
                        <small>Career</small>
                    </div>

                    <div className="item item-a">
                        <p>Services</p>
                        <small>Appliances Repair</small> <br/>
                        <small>househelp</small><br/>
                        <small>Gardening</small><br/>
                        <small>Carpenter</small><br/>
                        <small>Plumbing</small>
                    </div>
                    <div className="item item-a">
                        <p>Services</p>
                        <small>Home Painting</small> <br/>
                        <small>Electrician</small><br/>
                        <small>Mechanics</small><br/>
                        <small>Buy Hardware</small><br/>
                        <small>Buy Electronics</small>
                    </div>

                    <div className="item">
                        <p>Terms & Condition</p>
                        <p>Privacy & Policy</p>
                        <p>Cookies</p>
                        <p>Disclaimer</p>

                    </div>
                </div>

            </div>
            <hr style={{border: "0.5px solid white"}}/>
            <div className="text-center">
                <a style={{textDecoration: "none",color: "wheat"}} align="center" href="">© OneClick. All Rights
                    Reserved.</a>
            </div>
        </footer>
  )
}
