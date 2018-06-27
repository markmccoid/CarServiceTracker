import React from 'react';
import styled, { css } from 'react-emotion';

import { serviceSummary } from '../store/selectors/serviceSummary';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`;
const SummaryItem = styled('div')`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
  background: #eee;
  border: 1px solid #ccc;
`;

const ServiceSummary = ({ visibleServices =[] }) => {
  const serviceSummaryObj = serviceSummary(visibleServices);
  return (
    <Wrapper>
      {visibleServices.length !== 0 && <SummaryItem>Total Cost of Services Listed: {serviceSummaryObj.totalAmount}</SummaryItem>}
      {visibleServices.length !== 0 && <SummaryItem>Date of Last Oil Change: {serviceSummaryObj.lastOilChange.serviceDate}</SummaryItem>}
    </Wrapper>
  );
};

export default ServiceSummary;
