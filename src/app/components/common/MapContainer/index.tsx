import * as React from 'react';

import { compose, withProps, withState, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
// Constants
import KeySettings from 'app/constants/keySettings';
// Style
import './map-container.scss';

export namespace MapWithControlledZoom {
  export interface Props {
    locations: any;
    onMapMounted?: string;
    onZoomChanged?: () => void;
    onToggleOpen?: () => void;
  }
  export interface State {
  }
}

const MapWithControlledZoom = compose<MapWithControlledZoom.Props, any>(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KeySettings.googleMapApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `550px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers<any, any>(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      },
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
    const { locations } = props;
    const centerLat = locations.length > 1 ? 39.1823253 : locations[0].location.latitude;
    const centerLng = locations.length > 1 ? -78.5182085 : locations[0].location.longitude;
    const markerIcon = {
      url: require('app/assets/images/pin.png')
    };

    return (
      <GoogleMap
        defaultCenter={{ lat: centerLat, lng: centerLng }}
        zoom={locations.length > 1 ? 9 : 16}
        ref={props.onMapMounted}
        onZoomChanged={props.onZoomChanged}
      >
      {
        locations.map(item =>
          <Marker
            key={item.title}
            position={{ lat: item.location.latitude, lng: item.location.longitude
             }}
            icon={markerIcon}
          >
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  color: 'black' }}>
                  {item.address}
                </span>
              </div>
            </InfoWindow>
          </Marker>
        )
      }
      </GoogleMap>
    );
  }
);

export namespace MapComponent {
  export interface Props {
    locations: Array<any>;
  }
}

export class MapComponent extends React.Component<MapComponent.Props> {

  render() {
    const { locations } = this.props;

    return (
      <div className="cw-map-container-container">
        <MapWithControlledZoom locations={locations} />
      </div>
    );
  }
}

export default MapComponent;
