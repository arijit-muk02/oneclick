import React from 'react'
import '../assets/Login.css'
export default function Login() {
  return (
    <section className="Log" style={{backgroundColor: "#fff3e8"}}>
        <div className="container headings" style={{paddingTop:"20px"}}>
            <p><em>Already registered as a worker? <a href="">Login</a></em> </p>
            <h3>Join Our Team of Home Service Experts</h3>
            <h5>And help make every house a home</h5>
        </div>
        <br/>

        <br/>
        <div className="container">
            <div className="comment">
                <p>Fill up the Registration Form and we will contact you soon to set up your digital profile. Simple,
                    right?
                </p>
            </div>
            <div className="row">
                <div className="col-lg-4 ">
                    <form action="">
                        <label for="name-input">First Name</label> <br/>
                        <input type="text" name="text" className="input name-input" pattern="\d+" placeholder="John"/> <br/>
                        <br/>


                        <label for="contact-input">Contact</label> <br/>
                        <input type="number" name="text" className="input contact-input" pattern="\d+"
                            placeholder="987654321"/><br/>
                        <br/>

                        <label for="mail-input">Email</label> <br/>
                        <input type="email" name="text" className="input mail-input" pattern="\d+"
                            placeholder="Johncena@email.com"/> <br/>
                        <br/>
                    </form>
                </div>
                <div className="col-lg-4">
                    <form>
                        <label for=" date-input">Username </label> <br/>
                        <input type="text" name="text" className="input date-input" pattern="\d+" placeholder="@rohan_majdoor"/><br/>
                        <br/>

                        <label for=" name-input">Password</label> <br/>
                        <input type="password" name="text" className="input name-input" pattern="\d+" placeholder=""/><br/>
                        <br/>

                        <label for="date-input">Location</label> <br/>
                        <input type="text" name="text" className="input location-input" pattern="\d+"
                            placeholder="Location"/><br/>
                        <br/>
                    </form>
                </div>
                <div className="col-lg-4">
                    <form action="">
                        <label for="name-input">Occupation</label> <br/>
                        <input type="text" name="text" className="input name-input" pattern="\d+" placeholder="Plumber"/><br/>
                        <br/>

                        <label for="gender">Choose a Gender:</label>
                        <br/>
                        <select name="gender" id="gender">
                            <option>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer Not To Say</option>
                            <option>Audi</option>
                        </select> <br/>
                        <br/>
                        <label for="date-input">Experience</label> <br/>
                        <input type="text" name="text" className="input date-input" pattern="\d+" placeholder="3 Years"/><br/>
                        <br/>
                    </form>
                </div>
            </div>
            <small>Upload any govt id such as Aadhar Card, Pan Card, Driver’s license.</small>
            <input type="file" name="image" value="" accept="image/jpeg"/>
            <br/><br/>
        </div>
        <div className="text-center">
            <button>Submit</button>
        </div>
        <br/><br/>
    </section>
  )
}
