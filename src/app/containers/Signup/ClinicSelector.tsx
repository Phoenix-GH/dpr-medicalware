import * as React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, SubmissionError } from 'redux-form'
//import * as signUpActions from 'app/reducers/signup'
import * as appointmentActions from 'app/reducers/appointments'
import * as geolocationActions from 'app/reducers/geolocation'
//import * as moment from 'moment';
//import classnames from 'classnames';
import { validations, renderTextField } from 'app/components/common/forms';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
//import { ProgressPlugin } from 'webpack';

const userIcon = require('app/assets/images/location-icons/user.png');
const otherIcon = require('app/assets/images/location-icons/other.png');
const selectedIcon = require('app/assets/images/location-icons/selected.png');

let ZipFormComponent = props => {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="cw-signup-form zip-form">
            <Field
                name="code"
                type="text"
                label="ZIP Code"
                component={renderTextField as any}
                maxlength="4"
            />
            <button>>></button>
        </form>
    )
}

const ZipForm = reduxForm({ form: 'zip-geocode' })(ZipFormComponent)

const Map = withScriptjs(withGoogleMap((props:any) => {
    const { defaultCenter }: any = props;
    return <GoogleMap
        defaultZoom={8}
        defaultCenter={defaultCenter}
    >
        {props.children}
    </GoogleMap>
}))

export namespace ClinicSelector {
  export interface Props {
    onChange: Function;
    initialValues: any;
    getGeocode?: Function;
    locations?: Array<any>;
    loadLocations?: Function;
    position?: any;
    getPosition?: Function;
  }
}


class ClinicSelector extends React.Component<ClinicSelector.Props, any> {
    constructor(props) {
      super(props);
      this.state = {
        loading: false, location: this.props.initialValues.location
      }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.location !== this.state.location) {
            this.props.onChange(this.state.location)
        }
    }

    onZipCodeSubmit = async (values) => {

        if (validations.zip(values.code) !== undefined) {

            throw new SubmissionError({ code: 'Please enter a valid ZIP code' })
        } else {

            this.setState({ loading: true });
            const { position } = await this.props.getGeocode(values.code)

            if (position) {

                await this.props.loadLocations(position)
                this.setState({ location: this.props.locations[0].id, loading: false })
            }
            else {

                this.setState({ loading: false });
                throw new SubmissionError({ code: 'No results found' })
            }
        }
    }

    onDetectClick = async () => {

        await this.setState({ loading: true })
        const { position } = await this.props.getPosition();
        await this.props.loadLocations(position)
        this.setState({ location: this.props.locations[0].id, loading: false });
    }

    onMapMarkerClick = (location) => {

        this.setState({ location: location.id })
    }

    onlocationDropdownChange = (e) => {

        this.setState({ location: e.target.value })
    }

    render() {

        return (<div className="clinic-selector">
            <h2>Select a Clinic</h2>
            <div className="location-detector">
                <ZipForm onSubmit={this.onZipCodeSubmit} />
                <button className="detect-geolocation" onClick={this.onDetectClick} disabled={this.state.loading}>Detect my location</button>
            </div>
            {this.props.locations.length > 0 && this.props.position &&
                <React.Fragment>
                    <div className="closest-clinics cw-signup-form">
                        <label>Closest Clinic</label>
                        <div className="select">
                            <select value={this.state.location} onChange={this.onlocationDropdownChange}>
                                {this.props.locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="map">
                        <Map
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${'AIzaSyDimXn5YV6e4jHEJRXJXlt7xQMARMrKuo0'}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            defaultCenter={{ lat: this.props.locations[0].latitude, lng: this.props.locations[0].longitude }}
                        >
                            {this.props.locations.map(location => {

                                return <Marker
                                    key={location.id}
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    onClick={() => this.onMapMarkerClick(location)}
                                    icon={{ url: location.id === this.state.location ? selectedIcon : otherIcon }}
                                />
                            })}

                            <Marker
                                key={'user'}
                                position={{ lat: this.props.position.latitude, lng: this.props.position.longitude }}
                                icon={{ url: userIcon }}
                            />
                        </Map>
                    </div>
                    <div className="map-references">
                        <div className="clinic">Closest Clinic</div>
                        <div className="location">Your Location</div>
                        <div className="other">Other Clinics</div>
                    </div>
                </React.Fragment>
            }
        </div>)
    }
}

const mapStateToProps = state => ({
    locationsLoading: state.appointments.locationsLoading,
    positionLoading: state.geolocation.loading,
    locations: state.appointments.locations,
    position: state.geolocation.position,
})

const mapDispatchToProps = {
    loadLocations: appointmentActions.loadLocations,
    getPosition: geolocationActions.getPosition,
    getGeocode: geolocationActions.getGeocode,
}

export default connect(mapStateToProps, mapDispatchToProps)(ClinicSelector)
