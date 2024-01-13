import React from 'react'
import '../footer/footer.css'
function Footer() {
  return (
    <>
   
       <footer className="py-5">
                    <div className="row">
                      <div className="col-6 col-md-2 mb-3">
                        <h5>Home</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><span>Products</span></a></li>
                          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><span>Offers</span></a></li>
                         
                        </ul>
                      </div>
                
                      <div className="col-6 col-md-2 mb-3">
                        <h5>About</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><span>Affordability</span></a></li>
                          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><span>User-Focused</span> </a></li>
                         
                        </ul>
                      </div>
                
                      <div className="col-6 col-md-2 mb-3">
                        <h5>Contact Us</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><span>+91 94006 61824</span></a></li>
                          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><span>@techtide@gmail.com</span></a></li>
                         
                        </ul>
                      </div>
                
                      <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                          <h5>Subscribe to our newsletter</h5>
                          <p>Monthly digest of what's new and exciting from us.</p>
                          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" className="visually-hidden"><span>Email address</span></label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                            <button  className="swi">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                      <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-twitter-x"></i></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-instagram"></i></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-facebook"></i></a></li>
                      </ul>
                    </div>
                  </footer>
    </>
  )
}

export default Footer