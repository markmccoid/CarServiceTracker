import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { startEditService, startRemoveService } from '../actions/services';

const EditService = (props) => {
  return (
    <ServiceForm
      title="Edit Service Record"
      descArray={props.descArray}
      serviceArray={props.serviceArray}
      onSubmit={(serviceObj) => {
          props.dispatch(startEditService(props.match.params.id, serviceObj));
          props.history.push('/');
        }
      }
      onRemoveService={() => {
          props.dispatch(startRemoveService(props.match.params.id));
          props.history.push('/');
        }
      }
      service={props.service}
      cars={props.cars}
      onBack={() => props.history.push('/')}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    service: state.services.find(service => service.id === props.match.params.id),
    cars: state.cars,
    descArray: Object.keys(state.services).map((key) => state.services[key].description),
    serviceArray: Object.keys(state.services).map((key) => state.services[key].serviceProvider),
  };
};

export default connect(mapStateToProps)(EditService);
