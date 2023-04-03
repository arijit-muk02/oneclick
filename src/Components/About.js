import React from 'react'
import '../assets/About.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about2" style={{height: "630px"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="wrapper2">
                    <h2>Are you looking for your next job?</h2>
                    <h3>Connecting <em>Skilled workers</em> with homeowners .</h3> <br/>
                    <p>If you have a passion for home services and want to make a difference in people's
                        lives, we
                        have exciting job opportunities available for you. Our team is made up of skilled
                        and
                        dedicated professionals who are committed to delivering exceptional service to our
                        clients.
                        Be it plumbing, cleaning, gardening or cooking, we help our clients in the best way
                        possible. Join our team today!</p>
                    <Link to="/login"><button>Work With Us</button></Link>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="wrapper3">
                    <img className="model1" src="images/carpenter.png" alt=""/>
                    <img className="model2" src="images/cleaner.png" alt=""/>
                    <img className="model3" src="images/cook.png" alt=""/>
                </div>
            </div>
        </div>

    </div>
</section>
  )
}
