import * as React from 'react';
import { Link } from 'react-router-dom';
// Constants
import Routes from 'app/constants/routes';
// Style
import 'font-awesome/css/font-awesome.css'
import './contact-item.scss';

export namespace ContactItem {
  export interface Props {
    isMobileMenu: any;
  }
  export interface State {
    isContactOpen: boolean
  }
}

class ContactItem extends React.Component<ContactItem.Props, ContactItem.State> {
  constructor(props) {
    super(props);
    this.state = {
      isContactOpen: false
    };
  }
  onContactMouseOver = () => {
    this.setState({
      isContactOpen: true
    });
  }

  onContactMouseOut = () => {
    this.setState({
      isContactOpen: false
    });
  }

  render() {
    const { isMobileMenu } = this.props;
    const { isContactOpen } = this.state;
    return (
      <div className={`cw-contact-container ${isMobileMenu ? 'active' : ''}`}>
        <div className="cw-top-white-box">
          <ul>
            <li>
              <a href="tel:8885711570" className="phone">
                <i className="fa fa-phone" aria-hidden="true"></i>
                888-571-1570
              </a>
            </li>
            <li><Link to={Routes.signup}>LOGIN</Link></li>
          </ul>
        </div>
        <nav className="cw-contact-menu">
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li className={`menu-item-has-children ${isContactOpen ? 'open' : ''}`} >
              <a onMouseOver={this.onContactMouseOver}
                 className="dropdown-toggle"
                 onMouseOut={this.onContactMouseOut}>
                 About Us
              </a>
              <ul className={`sub-menu ${isContactOpen ? 'open' : ''}`}
                  onMouseOver={this.onContactMouseOver}
                  onMouseOut={this.onContactMouseOut} >
                <li><Link to={Routes.doctors}>Our Doctors</Link></li>
                <li><Link to={Routes.faq}>FAQ</Link></li>
                <li><Link to={Routes.privacy}>Privacy Practices</Link></li>
                <li><Link to={Routes.hippa}>HIPPA Privacy Notice</Link></li>
                <li><Link to={Routes.aboutUs}>About Persona Doctors</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="cw-login-mobile-menu">
          <a href="tel:8885711570" className="phone">
            <i className="fa fa-phone" aria-hidden="true"></i>
            888-571-1570
          </a>
          <div className="cw-login-button">
            <Link to={Routes.signup}>LOGIN</Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ContactItem;
