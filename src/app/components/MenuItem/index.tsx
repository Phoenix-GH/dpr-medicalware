import * as React from 'react';

// Constants
import Routes from 'app/constants/routes';
// Style
import './menu-item.scss';

export namespace MenuItem {
  export interface Props {
    item: any;
    pathName: string;
  }
  export interface State {
    isMobileMenu: boolean,
  }
}

export default class MenuItem extends React.Component<MenuItem.Props> {
  render () {
    const { item, pathName } = this.props;
    const routes:any = Routes;
    return (
      <div className="cw-menu-item">
        { item.img && <img src={item.img} alt="menut item"/> }
        <span className={pathName && routes[item.name] === pathName ? 'active' : ''}>
          {item.title}
        </span>
      </div>
    );
  }
}

