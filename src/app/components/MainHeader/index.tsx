import * as React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'app/constants/routes';
import MenuItem from 'app/components/MenuItem';
import ContactItem from 'app/components/ContactItem';
import { menuItems } from 'app/constants/menuItems';
import 'font-awesome/css/font-awesome.css'
import './main-header.scss';

const logoImg = require('app/assets/images/logo.png');

export namespace Header {
  export interface Props {
    pathName: any;
  }
  export interface State {
    isMobileMenu: boolean,
  }
}

export class MainHeader extends React.Component<Header.Props, Header.State> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
    this.state = {
      isMobileMenu: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  _mobileMenuClick = () => {
    this.setState({
      isMobileMenu: !this.state.isMobileMenu
    });
  }

  onResize = () => {
    this.setState({
      isMobileMenu: false
    });
  }

  render() {
    const { pathName } = this.props;
    const { isMobileMenu } = this.state;
    const routes:any = Routes;

    return (
      <div className="cw-menu-container">
        <div className="cw-menu-bar">
          <div className="cw-logo-image">
            <Link to={Routes.home}>
              <img src={logoImg} alt="logo"/>
            </Link>
            <div className="cw-mobile-menu">
              <a onClick={this._mobileMenuClick}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>
          <div className={`cw-img-menu-itmes ${isMobileMenu ? 'active' : ''}`}>
            <ul>
              { menuItems.map(item =>
                <li key={item.name}>
                  <Link to={routes[item.name]}>
                    <MenuItem item={item} pathName={pathName} />
                  </Link>
                </li>
              ) }
            </ul>
          </div>
          <ContactItem isMobileMenu={isMobileMenu} />
        </div>
      </div>
    );
  }
}
