import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Constants
import Routes from 'app/constants/routes';
// Images
const footerLogo = require('app/assets/images/logo-footer.png');
// Style
import './main-footer.scss';

class MainFooter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const routes:any = Routes;
    return (
      <div className="cw-footer-container">
        <footer className="cw-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={footerLogo} alt="Persona Doctors" className="footer-logo img-responsive" />
                <p>For years, the staff at Persona Doctors has helped thousands of people just like you realize their dreams.</p>
                <p>Our centers are staffed only with medical professionals who care about you, your weight loss and your health.</p>
                <p>They will tell you about our unique and individual weight loss programs, why they work, the fees and how to get started.</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <h3>OUR LOCATIONS</h3>

                <h4>Maryland Locations:</h4>
                <ul>
                  <li><Link to={{pathname: routes.locations, query: { name: 'COLEGE PARK, MARYLAND' }} as any} >College Park</Link></li>
                  <li><Link to={{pathname: routes.locations, query: { name: 'PIKESVILLE, MARYLAND' }} as any}>Pikesville</Link></li>
                  <li><Link to={{pathname: routes.locations, query: { name: 'ROCKVILLE, MARYLAND' }} as any}>Rockville</Link></li>
                </ul>

                <h4>Virginia Locations:</h4>
                <ul>
                  <li><Link to={{pathname: routes.locations, query: { name: 'TYSONS CORNER, VIRGINIA' }} as any}>Tysons Corner</Link></li>
                  <li><Link to={{pathname: routes.locations, query: { name: 'WOODBRIDGE, VIRGINIA' }} as any}>Woodbridge</Link></li>
                </ul>

                <p className="phone"><a href="tel:8885711570">888-571-1570</a></p>
                <p><a href="mailto:info@persona-doctors.com" className="email">info@persona-doctors.com</a></p>
              </div>
              <div className="col-md-2">
                <h3>PRODUCTS AND SERVICES</h3>
                <ul>
                  <li><Link to={routes.home}>Medical Weight Loss</Link></li>
                  <li><a href="https://persona-doctors.com/Vitamin-B12-Energy-Lipotropic-And-Adenosine-Injections" target="_blank" rel="noopener noreferrer">B12 Energy Injections</a></li>
                  <li><a href="https://persona-doctors.com/Hormone-Optimization-Therapy" target="_blank" rel="noopener noreferrer">Hormone Therapy</a></li>
                  <li><a href="https://persona-doctors.com/Liposonix-Spot-Fat-Reduction" target="_blank" rel="noopener noreferrer">Spot Fat Reduction</a></li>
                </ul>

                <h3>PERSONA DOCTORS</h3>
                <ul>
                  <li><Link to={routes.pricing}>Pricing</Link></li>
                  <li><Link to={routes.locations}>Locations</Link></li>
                  <li><Link to={routes.doctors}>Our Doctors</Link></li>
                  <li><Link to={routes.signup}>Sign Up Today</Link></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3>RESOURCES</h3>
                <ul>
                  <li><Link to={routes.aboutUs}>About Persona Doctors™</Link></li>
                  <li><Link to={routes.faq}>Frequently Asked Questions</Link></li>
                  <li><Link to={routes.privacy}>Privacy Practices</Link></li>
                  <li><Link to={routes.hippa}>HIPAA Privacy Notice</Link></li>
                </ul>

                <h3 className="social-media">SOCIAL MEDIA</h3>
                <ul className="social">
                  <li><a href="https://twitter.com/personadoctors" className="icon-twitter" title="Twitter" target="_blank" rel="noopener noreferrer"><span></span></a></li>
                  <li><a href="https://www.linkedin.com" className="icon-linkedin" title="Linkedin" target="_blank" rel="noopener noreferrer"><span></span></a></li>
                  <li><a href="https://www.facebook.com/PersonaDoctor" className="icon-facebook" title="Facebook" target="_blank" rel="noopener noreferrer"><span></span></a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <div className="imgs">
                  <img src={require('../../assets/images/aplus.png')} alt="" />
                  <img src={require('../../assets/images/nabp.png')} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                * Amount of weight loss results vary based on starting weight, program adherence, medications prescribed, metabolic factors and other possible medical conditions.<br />
                † If you have not lost weight in the first 30 days we will refund 100% of the fees paid.
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-6"><p>Copyright © 2002-2017, Persona Doctors. All Rights Reserved.</p></div>
                <div className="col-md-6"><p className="designed-by">Designed by <a href="https://persona-doctors.com/" target="_blank" rel="noopener noreferrer">Cycloware</a></p></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
};
function mapStateToProps(state) {
  return { locations: state.locations.data };
}


export default connect(mapStateToProps)(MainFooter);

