import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import { Button } from 'antd';

import CarForm from './CarForm';
import { startAddCar, startEditCar, startRemoveCar } from '../../actions/cars';
import CarList from './CarList';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
`;

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addEditCar: ''
    }
    let addCarJSX = null;
    let editCarJSX = null;
  }
  editCar = (carId) => {
    this.setState(() => ({ addEditCar: 'edit' }));
    this.editCarJSX = (
      <CarForm
        car={this.props.cars.find(car => car.id === carId)}
        onSubmit={(carObj) => {
          this.props.startEditCar(carId, carObj);
          this.setState(() => ({ addEditCar: null }));
        }}
        onCancel={this.cancelCarAction}
      />);
  }
  cancelCarAction = () => this.setState(() => ({ addEditCar: '' }));

  render() {
    this.addCarJSX = <CarForm
          onSubmit={(carObj) => {
            this.props.startAddCar(carObj);
            this.setState(() => ({ addEditCar: '' }))
          }}
          onCancel={this.cancelCarAction}
        />;

    return (
      <div>
        <Container>
          <div className="content-container" style={{display:"flex", justifyContent: "space-between"}}>
            <h1 className="page-header__title">Cars</h1>
            <Button type="primary" size="large" onClick={() => {this.setState(() => ({ addEditCar: 'add' }))}}>Add Car</Button>
          </div>
        </Container>
        <div className="content-container">

            {this.state.addEditCar === 'add' ? this.addCarJSX :
             this.state.addEditCar === 'edit' ? this.editCarJSX :
             null
            }
          <CarList
            cars={this.props.cars}
            onEditCar={this.editCar}
            onRemoveCar={this.props.startRemoveCar}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cars: state.cars
});


export default withRouter(connect(mapStateToProps, { startAddCar, startEditCar, startRemoveCar })(Cars));
