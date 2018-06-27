import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import styled, { css } from 'react-emotion';

import { StandardButton } from '../common/Buttons';
import * as S from './styles';

const Fragment = React.Fragment;
/*------------------------------------------
-- ServiceListItem Component
------------------------------------------*/
const ServiceListItem = (props) => {
  return (
    <Link className={S.listItemContainer} style={{position: "relative"}}to={`/edit/${props.id}`}>
      <S.ListTop>
        <div className={S.rowCell}><strong>Car: </strong> <span className="list-item__subtitle">{props.carNickName}</span>
          <br />
          <S.DateStyle> {moment(props.serviceDate).format('MMM Do, YYYY')}</S.DateStyle>
        </div>
        <div className={S.rowCell3}><strong>Service: </strong>{props.serviceDescription}
          <br />
          <div><strong>Provider: </strong> <span className="list-item__subtitle">{props.serviceProvider}</span></div>
        </div>
        <div>{numeral(props.serviceCost / 100).format('$0,0.00')}</div>
      </S.ListTop>
      <S.ListBottom>
        <div>{props.serviceNote}</div>
        <StandardButton onClick={(e) => {
            //Need to prevent default because inside a Link (a) element
              e.preventDefault(); 
              props.removeService();
            }
          }>
          Delete
        </StandardButton>
      </S.ListBottom>
    </Link>
  );

};

export default ServiceListItem;


/*--USING styled-components
const Card = styled('div')`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  justify-content: space-between;
  margin-top: 1.2rem;
`
const CardRow = styled('div')`
  display: flex;
  border-top: 1px solid #ccc;
`;
<Card>
  <CardRow>
    <h1>{props.carNickName}</h1>
    <h1><Link to={`/edit/${props.id}`}>{props.description}</Link></h1>
  </CardRow>
  <CardRow>
    Service Provider:{props.serviceProvider}
  </CardRow>
  <CardRow>
    Cost:{numeral(props.amount / 100).format('$0,0.00')}
    Date of Service:{moment(props.createdAt).format('MM-DD-YYYY')}
  </CardRow>
  <CardRow>
    {props.notes || 'No Notes'}
  </CardRow>
</Card>
*/
