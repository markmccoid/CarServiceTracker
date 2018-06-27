import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import styled, { css, cx } from 'react-emotion';
import SelectR from 'react-select'; 
import { Select } from 'antd';
import { Input } from 'antd';
import { DatePicker } from 'antd';

import { setTextFilter, setCarFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const Option = Select.Option;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  max-width: 80rem;
  padding: 0 1.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  box-shadow: 0 0 5px black;
  width: 100%;
  @media (max-width: 800px) {
   flex-direction: column;
   justify-content: stretch;
   align-items: flex-start;
  }
}`;

// const Input = styled('input')`
//   padding: 5px;
//   height: 30px;
// `;
const inputGroup = css`
  display: flex;
  flex-direction: row;
  margin: .25rem;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 800px) {
   flex-direction: column;
   justify-content: stretch;
   align-items: flex-start;
  }
`;
const dateGroupCSS = css`
  display: flex;
  flex-grow: 3;
  @media(max-width: 800px) {
    margin: .3rem .3rem 1rem .35rem;
    width: 100%;
  }
`;

const selectCSS = css`
  min-width: 150px;
  font-size: 16px;
  width: 100%;
`
const inputGroupItem = css`
  margin: .5rem;
  flex-grow: 1;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

class ServiceListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onStartDateChange =(startDate) => {
    this.setState({ calendarFocused: false });
    this.props.dispatch(setStartDate(startDate));
  }
  onStopDateChange =(stopDate) => {
    //this.setState({ calendarFocused: false });
    this.props.dispatch(setEndDate(stopDate));
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  render() {
    const sortOptions = [<Option value="date" key="1">Sort by Date</Option>, 
      <Option value="amount" key="2">Sort by Amount</Option>];
    const carFilterOptions = this.props.cars.map((carObj) => 
        <Option value={carObj.id} key={carObj.id}>{carObj.nickName}</Option>
      );
    console.log(carFilterOptions)
    return (
      <Container>  
        <h3 style={{ margin: "0"}}>Filters</h3>
        <div className={inputGroupItem}>
          <Select 
            allowClear 
            className={selectCSS}
            placeholder="Car Filter..."
            onChange={(val) => {
                let carFilter = val ? val : ''
                  this.props.dispatch(setCarFilter(carFilter));
              }
            }
          >
            {carFilterOptions}
          </Select>
        </div>
        <div className={inputGroupItem}>
          <Input
            className="text-input"
            type="text"
            value={this.props.filters.text}
            placeholder="Search Descriptions"
            onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
          />
        </div>
        <div className={inputGroupItem}>
          <Select 
            className={selectCSS}
            defaultValue={this.props.filters.sortBy}
            onChange={(val) => {
              if (val === 'date') {
                this.props.dispatch(sortByDate());
              } else {
                this.props.dispatch(sortByAmount());
              }
            }
            }
          >
            {sortOptions}
          </Select>            

            
        </div>
        <div className={dateGroupCSS}>
          {/* <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates
          /> */}
          <DatePicker
            style={{width: "50%"}}
            onChange={this.onStartDateChange}
            format="MM-DD-YYYY"
          />
          {` → `}
          <DatePicker
            style={{width: "50%"}}
            onChange={this.onStopDateChange}
            format="MM-DD-YYYY"
          />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    cars: state.cars,
    oldCars: [ { id: '', nickName: '' }, ...state.cars],
  }
}
export default connect(mapStateToProps)(ServiceListFilters);
