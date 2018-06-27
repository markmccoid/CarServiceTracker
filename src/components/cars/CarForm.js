import React from 'react';
import styled, { css } from 'react-emotion';
import { Button, Input } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 10px auto;
  padding: 10px;
  width: 80%;
  border: 1px solid darkgray;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const textInput = css`
  margin: 0 5px;
  @media (max-width: 800px) {
    margin-bottom: 5px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
  @media (max-width: 800px) {
    margin: 0 0 0 10px;
  }
`;

class CarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickName: props.car ? props.car.nickName : '',
      make: props.car ? props.car.make : '',
      model: props.car ? props.car.model : '',
      year: props.car ? props.car.year : '',
      licensePlate: props.car ? props.car.licensePlate || '' : '',
      VIN: props.car ? props.car.VIN || '' : ''
    }
  }
  componentDidMount() {
    const focusInput = document.getElementById("inputNickName");
    focusInput.focus();
  }
  onNickNameChange = (e) => {
    const nickName = e.target.value;
    this.setState(() => ({nickName}));
  }
  onMakeChange = (e) => {
    const make = e.target.value;
    this.setState(() => ({make}));
  }
  onModelChange = (e) => {
    const model = e.target.value;
    this.setState(() => ({model}));
  }
  onYearChange = (e) => {
    const year = e.target.value;
    if (!year || (year.match(/^\d{0,4}$/) && year.length <= 4)) {
      this.setState(() => ({year}))
    }
  }
  onVINChange = (e) => {
    const VIN = e.target.value.toUpperCase();
    this.setState(() => ({ VIN }));
  }
  onLicenseChange = (e) => {
    const licensePlate = e.target.value.toUpperCase();
    this.setState(() => ({ licensePlate }));
  }
  clearState = () => {

    this.setState(() => ({
      nickName: '',
      make: '',
      model: '',
      year: '',
      licensePlate: '',
      VIN: ''
    }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.nickName || !this.state.make || !this.state.model) {
      this.setState(() => ({error: 'Please enter a Nick Name, Make and Model'}))
    } else {
      this.setState(() => ({error: undefined}))
      const carObj = {
        nickName: this.state.nickName,
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        licensePlate: this.state.licensePlate,
        VIN: this.state.VIN
      }
      this.props.onSubmit(carObj);
      this.clearState();
    }
    const focusInput = document.getElementById("inputNickName");
    focusInput.focus();
  }
  render() {
    return (
      <Container>
        {this.state.error && <p>{this.state.error}</p>}
        <Row>
          <Input className={textInput}
            label='Car Nick Name'
            placeholder='Nick Name'
            value={this.state.nickName}
            onChange={this.onNickNameChange}
            id="inputNickName"
          />
          <Input className={textInput}
            label='Make'
            placeholder='Make'
            value={this.state.make}
            onChange={this.onMakeChange}
          />
          <Input className={textInput}
            label='Model'
            placeholder='Model'
            value={this.state.model}
            onChange={this.onModelChange}
          />
        </Row>
        <Row>
          <Input className={textInput}
            label='Year'
            placeholder='Year'
            value={this.state.year}
            onChange={this.onYearChange}
          />
          
          <Input className={textInput}
            placeholder='License Plate'
            value={this.state.licensePlate}
            onChange={this.onLicenseChange}
          />

          <Input className={textInput}
            placeholder='VIN Number'
            value={this.state.VIN}
            onChange={this.onVINChange}
          />
        </Row>
        
        <ButtonGroup>
          <Button type="primary" onClick={this.onSubmit}>Save Car</Button>
          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            this.clearState();
          }}>Clear</Button>
          <Button type="primary" onClick={this.props.onCancel}>Cancel</Button>
        </ButtonGroup>

      </Container>
    );
  }
}

export default CarForm;
