import { Link } from "react-router-dom";
function Footer() {
    return (
    <footer className="footer navbar-custom text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Navigating education seamlessly. Explore our LMS platform for an enriched learning experience.</p>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-inline">
            <li>Website - <Link to="https://kgitservices.com/about-us/" className="text-light">KG IT Services</Link></li>
            <li >linkedIn - <Link to="https://www.linkedin.com/company/kgit-computer-services/posts/?feedView=all" className="text-light">kgit_it_services</Link></li>  
            <li>Phone.no - +91 8123096140</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
            TOWER-2,G-02,SLV BRUNDAVAN,
            HEELALIGE, 
            CHANDAPURA, 
            BENGALURU 560099 <br/>
            Phone.no - +91 8123096140
            </address>
          </div>
        </div>
      </div>
    </footer>
    );
  }
  
  export default Footer;