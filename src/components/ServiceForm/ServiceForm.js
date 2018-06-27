import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Select } from 'antd';
import { Input } from 'antd';
import { Button, Icon, DatePicker } from 'antd';
import  * as S from './styles';

const Option = Select.Option;

class ServiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carId: props.service ? props.service.carId : props.cars.length > 0 ? props.cars[0].id : 0,
      serviceDescription: props.service ? props.service.serviceDescription : '',
      serviceProvider: props.service ? props.service.serviceProvider || '' : '',
      serviceNote: props.service ? props.service.serviceNote : '',
      serviceCost: props.service ? (props.service.serviceCost / 100).toString() : '',
      amountFormatted: props.service ? numeral(props.service.serviceCost / 100).format('$0,0.00') : '',
      serviceDate: props.service ? moment(props.service.serviceDate) : moment(),
      calendarFocused: false,
      error: undefined,
      backspace: false,
      date: new Date()
    };
  }

  onCarChange = (value) => {
    const carId = value; //e.target.value;
    this.setState(() => ({ carId }));
  }

  onKeyDown = (e) => {
    const keyPressed = e.key;
    //Check if Backspace or Delete
    if (keyPressed === 'Backspace' || keyPressed === 'Delete') {
      this.setState({backspace: true})
    }
  }
  onDescriptionChange = (e) => {
    //Get input value
    //CHECK FOR this.state.backspace and if true, set state to target.value passed
    // and set backspace to false
    const serviceDescription = e.target.value;
    if (this.state.backspace) {
      return this.setState(() => ({
          serviceDescription,
          backspace: false
        })
      );
    }
    //Setup match expression
    const matchExpr = serviceDescription.length > 0 ? '^' + serviceDescription : /.^/;
    // console.log(`matchExpr: ${matchExpr}`);
    //Create RegExp Object
    const expr = new RegExp(matchExpr, 'ig');
    //Try and Find a match in array of service serviceDescriptions
    const foundItem = this.props.descArray.find((desc) => desc.match(expr));
    // console.log(`foundItem ${foundItem}`);
    //If not found, return serviceDescription, else return found item and set selection range
    const finalValue = foundItem || serviceDescription;
    // console.log(`finalValue: ${finalValue} -- length: ${finalValue.length}`);

    const startPos = serviceDescription.length;
    const endPos = finalValue.length;
    //this.test.setSelectionRange(1, 3);
    this.setState(() => {
        return ({
          serviceDescription: finalValue
        })
      },
      () => {
        if (foundItem) {
          this.descInput.input.setSelectionRange(startPos, endPos);
        }
      }
    );
    // this.test.selectionStart = 1;
    // console.log(description.length);
    // this.test.selectEnd = foundItem.length;
  }
  onServiceProviderChange = (e) => {
    //Get input value

    const serviceProvider = e.target.value;
    //CHECK FOR this.state.backspace and if true, set state to target.value passed
    // and set backspace to false
    if (this.state.backspace) {
      return this.setState(() => ({
          serviceProvider,
          backspace: false
        })
      );
    }
    //Setup match expression
    const matchExpr = serviceProvider.length > 0 ? '^' + serviceProvider : /.^/;
    //Create RegExp Object
    const expr = new RegExp(matchExpr, 'ig');
    //Try and Find a match in array of service descriptions
    const foundItem = this.props.serviceArray.find((service) => service.match(expr));
    //If not found, return description, else return found item and set selection range
    const finalValue = foundItem || serviceProvider;
    const startPos = serviceProvider.length;
    const endPos = finalValue.length;
    //this.test.setSelectionRange(1, 3);
    this.setState(() => {
        return ({
          serviceProvider: finalValue
        })
      },
      () => {
        if (foundItem) {
          this.serviceInput.input.setSelectionRange(startPos, endPos);
        }
      }
    );
  }
  onNoteChange = (e) => {
    const serviceNote = e.target.value;
    this.setState(() => ({ serviceNote }));
  }
  /**----------------------
   * Amount Functions
  ------------------------*/
  onAmountBlur = () => {
    //When leaving amount field display formatted amount
    this.setState((prevState) => {
        return ({
          amountFormatted: numeral(prevState.serviceCost).format('$0,0.00') 
        });
      }
    );
  };
  //When entering Amount field set back to unformatted amount
  onAmountFocus = () => this.setState((prevState) => ({amountFormatted: prevState.serviceCost }));
  onAmountChange = (e) => {
    const serviceCost = e.target.value;
    if (!serviceCost || serviceCost.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ serviceCost, 
          amountFormatted: serviceCost
        }
      ));
    }
  }
  /**--------------
   * Date Functions
  ----------------*/
  onDateChange = (serviceDate) => {
    if (serviceDate) {
      this.setState(() => ({ serviceDate }));
    }
  }

  onSubmit = () => {
    //e.preventDefault();
    if (!this.state.serviceDescription || !this.state.serviceCost) {
      this.setState(() => ({ error: 'Please enter a description and an amount' }));
    } else {
      this.setState(() => ({ error: undefined }));
      const serviceObj = {
        serviceDescription: this.state.serviceDescription,
        serviceCost: parseFloat(this.state.serviceCost, 10) * 100,
        serviceNote: this.state.serviceNote,
        serviceProvider: this.state.serviceProvider,
        serviceDate: this.state.serviceDate.valueOf(),
        carId: this.state.carId
      };
      this.props.onSubmit(serviceObj);

    }
  }
  render() {
    return (
      <S.Container>
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <S.Header>
              <Button type="normal" onClick={this.props.onBack}>
                <Icon type="left" />Back
              </Button>
            { this.props.title}
            <div> </div>
          </S.Header>
          <S.Row1>
            <Select 
              style={{minWidth: "150px"}}
              placeholder="Select a Car..."
              name="car" 
              onChange={this.onCarChange} 
              defaultValue={this.state.carId}
            >
              {this.props.cars.map(car => (
                <Option key={car.nickName} value={car.id}>{car.nickName}</Option>
              ))}
            </Select>
            <DatePicker
              style={{minWidth: "150px"}}
              onChange={(date) => this.setState({ serviceDate: date })}
              format="MM-DD-YYYY"
              defaultValue={this.state.serviceDate}
            />
            <Input
              type="text"
              placeholder="amount"
              value={this.state.amountFormatted}
              onChange={this.onAmountChange}
              onBlur={this.onAmountBlur}
              onFocus={this.onAmountFocus}
            />
            
          </S.Row1>
          <S.Row1>
            <Input
              style={{width: "100%"}}
              className="text-input"
              type="text"
              placeholder="Description"
              autoFocus
              ref={(input) => this.descInput = input}
              value={this.state.serviceDescription}
              onChange={this.onDescriptionChange}
              onKeyDown={this.onKeyDown}
            />
            <Input
              style={{width: "100%"}}
              className="text-input"
              type="text"
              placeholder="Service Provider"
              ref={(input) => this.serviceInput = input}
              value={this.state.serviceProvider}
              onChange={this.onServiceProviderChange}
              onKeyDown={this.onKeyDown}
            />
          </S.Row1>
          <S.Row1>
            <Input.TextArea
              className="textarea"
              placeholder="Service Details"
              value={this.state.serviceNote}
              onChange={this.onNoteChange}
            />
          </S.Row1>
          <S.ButtonRow>
            {this.props.onRemoveService && 
              <Button 
                type="danger" 
                onClick={this.props.onRemoveService}
                style={{margin: "0 10px"}}
              >Remove</Button>
            }
            <Button type="primary" onClick={this.onSubmit}>Save Service</Button>
          </S.ButtonRow>
        </form>
      </S.Container>
    );
  }
}

export default ServiceForm;
