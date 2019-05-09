import * as React from 'react';

// Style
import './doctor-card-box.scss';

export namespace DoctorCardBox {
  export interface Props {
    doctorInfo:any;
  }
}

class DoctorCardBox extends React.Component<DoctorCardBox.Props> {
  render () {
    const { doctorInfo } = this.props;

    return (
      <div className="col-md-6 doctor-card-container">
        <div className="our-doctors-item">
          <div className="img"><img src={doctorInfo.photo} alt="Henry J. Watt, M.D." /></div>
          <div className="hd">
            <h3>{doctorInfo.name}</h3>
            <span></span>
            <strong>{doctorInfo.certificate}</strong>
          </div>
          <div className="ct">
          {
            doctorInfo.descriptions.map((content, index) =>
              <p key={index}>{content}</p>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorCardBox
