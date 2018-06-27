import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';

import CarForm from './CarForm';
import { startAddCar, startEditCar } from '../../actions/cars';
import CarList from './CarList';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const AddCar = (props) => {

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Car</h1>
        </div>
      </div>
      <div className="content-container">
        <CarForm onSubmit={(carObj) => {
            console.log(carObj)
            props.startAddCar(carObj);
            }}
          />
          <CarList cars={props.cars} onEditCar={props.startEditCar} />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  cars: state.cars
});


export default connect(mapStateToProps, { startAddCar, startEditCar })(AddCar);
