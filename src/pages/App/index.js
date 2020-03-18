import React, { Component, Fragment } from "react";
import Dimensions from "react-dimensions";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import { withRouter } from "react-router-dom";
import { logout } from "../../services/auth";
import Button from "./components/Button";
import { Container, ButtonContainer } from "./styles";
import Menu from "../Cliente/components/Menu";

import Sair from "../../assets/exit.ico";

import Properties from "./components/Properties";

const TOKEN = "pk.eyJ1IjoiY2xlYmVyaW5mb3dheSIsImEiOiJjazZrMm1wdmwwMmV2M3RudGdsZW80bmhhIn0.lAnaLGT5KUXylQUZ8yz3DA";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  constructor() {
    super();
    this.updatePropertiesLocalization = debounce(
      this.updatePropertiesLocalization,
      500
    );
  }

  state = {
    viewport: {
      latitude: -16.7519407,
      longitude: -48.5224066,
      zoom: 15.8,
      bearing: 0,
      pitch: 0
    },
    properties: []
  };

  componentDidMount() {
    this.loadProperties();
  }
  
  updatePropertiesLocalization() {
    this.loadProperties();
  }
  
  loadProperties = async () => {
    // const { latitude, longitude } = this.state.viewport;
    // try {
    //   const response = await api.get("/clientes", {
    //     params: { latitude, longitude }
    //   });
    //   this.setState({ properties: response.data });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  handleLogout = e => {
    logout();
    this.props.history.push("/");
  };

  renderActions() {
    return (
      <ButtonContainer>
        <Button color="#222" onClick={this.handleLogout}>
          <img src={Sair} alt="Sair"></img> 
        </Button>
      </ButtonContainer>
    );
  }

  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    const { properties } = this.state;
    return (
    
    <Fragment>
      <Menu/>
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
        onViewStateChange={this.updatePropertiesLocalization.bind(this)}
      >
        <Properties properties={properties} />
      </MapGL>
      {this.renderActions()}
    </Fragment>
    );
  }
}


const DimensionedMap = withRouter(Dimensions()(Map));
const App = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default App;