import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { startAddService } from '../actions/services';

const AddService = props => (
  <ServiceForm
  title="Add Service Record"
    descArray={props.descArray}
    serviceArray={props.serviceArray}
    cars={props.cars}
    onSubmit={(serviceObj) => {
      props.dispatch(startAddService(serviceObj));
      props.history.push('/');
    }}
    onBack={() => props.history.push('/')}
  />
);

const mapStateToProps = state => ({
  descArray: Object.keys(state.services).map((key) => state.services[key].serviceDescription),
  serviceArray: Object.keys(state.services).map((key) => state.services[key].serviceProvider),
  cars: state.cars
});
export default connect(mapStateToProps)(AddService);
