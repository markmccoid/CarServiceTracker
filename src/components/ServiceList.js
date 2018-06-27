import React from 'react';
import { connect } from 'react-redux';
import styled, { css, cx } from 'react-emotion';

import ServiceListItem from './ServiceListItem/ServiceListItem';
import ServiceSummary from './ServiceSummary';

import selectVisibleServices from '../store/selectors/services';
import { startRemoveService } from '../actions/services';

/*------------------------------------------
-- Styles
------------------------------------------*/
const ContentContainer = styled.div`
  max-width: 80rem;
  padding: 0 1rem;
  margin: 0 auto;
}`;
const ListHeader = styled.div`
  background: #f7f7f7;
  display: flex;
  border: 1px solid #d7d7d7;
  justify-content: space-between;
  padding: 10px 20px;
`;

const listItem = css`
  border: 1px solid #d7d7d7;
  border-top: none;
  color: $dark-grey;
  display: flex;
  flex-direction: column;
  padding: $s-size;
  text-decoration: none;
  transition: background .3s ease;
  &:hover {
    background: #d7d7d7;
    color: $dark-grey;
  }
`;

const listItemMessage = css`
  align-items: center;
  justify-content: center;
  &:hover {
    background: none;
  }
`;

const listItemTitle = css`
  margin: 0;
  word-break: break-all;
`;

const listItemSubtitle = css`
  color: $grey;
  font-size: 1rem;
`;

const listItemData = css`
  margin: $s-size 0 0 0;
  @media (min-width: $desktop-breakpoint) {
    margin: 0;
    padding-left: $s-size;
  }
`;

const listItemNote = css`
  font-size: 1rem;
  display: flex;
  align-self: flex-start;
`;

/*------------------------------------------
-- ServiceList Component
------------------------------------------*/
const ServiceList = props => (
  <ContentContainer>
    <ServiceSummary visibleServices={props.services} />
    <ListHeader>
      <div>Service</div>
      <div>Amount</div>
    </ListHeader>

    { props.services.length === 0 ?
      <div className={cx(listItem, listItemMessage)}>
        <span >No Services</span>
      </div>
      :
      props.services.map((service) => {
        const serviceCar = props.cars.find(car => car.id === service.carId);
        return (<ServiceListItem
                  key={service.id} {...service}
                  carNickName={serviceCar.nickName || ''}
                  removeService={() => props.startRemoveService(service.id)}
                />);
    })};

  </ContentContainer>
);

const mapStateToProps = state => (
  {
    services: selectVisibleServices(state.services, state.filters),
    cars: state.cars
  }
);
export default connect(mapStateToProps, { startRemoveService })(ServiceList);
