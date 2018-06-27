import React from 'react';
import styled, { css } from 'react-emotion';

const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  margin-bottom: 10px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CarDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid darkgray;
`;

const BigButton = styled.div`
  display: flex;
  height: 100%;
  background-color: dodgerblue;
  padding: 5px;
  justify-content: center;
  align-items: center;  
  cursor: pointer;
  font-size: 1.2rem;
  &:first-child {
    border-bottom: 1px solid darkgray;
  }
`;

const carNickName = css`
  font-size: 1.8rem;
  background: aliceblue;
  border-bottom: 1px solid lightblue;
`;

const CarInfo = styled('div')`
  display: flex;
  justify-content: flex-start;
  font-family: 'Exo 2', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px;
  background-color: ${props => props.bgColor ? props.bgColor : 'white'};
  border-bottom: ${props => props.borderBottom ? '1px solid #003166' : 0}
`;

const carDetailItem = css`
  width: 100%;
  font-size: 1.3rem;
  @media (max-width: 1045px) {
    width: 40%;
  }
`;

const Underline = styled.span`
  border-bottom: 1px solid #003166;
`;

const CarListItem = (props) => {
  return (
      <Container>
        <div className={carNickName} >
          {props.car.nickName}
        </div>
        <SubContainer>
          <CarDetails>
            <CarInfo>
              <div className={carDetailItem}>Year: <Underline>{props.car.year}</Underline></div> 
              <div className={carDetailItem}>Make: <Underline>{props.car.make}</Underline></div> 
              <div className={carDetailItem}>Model: <Underline>{props.car.model}</Underline></div>
            </CarInfo>
            <CarInfo>
              <div className={carDetailItem}>Plate: <Underline>{props.car.licensePlate}</Underline> </div>
              <div className={carDetailItem}>VIN: <Underline>{props.car.VIN}</Underline></div>
            </CarInfo>
          </CarDetails>
          <ButtonContainer>
            <BigButton
              onClick={() => props.onEditCar(props.car.id)}
            >
              Edit Car 
            </BigButton>
            <BigButton
              onClick={() =>{ console.log('remove'); props.onRemoveCar(props.car.id)}} 
            >
              Remove Car
            </BigButton>
          </ButtonContainer>
        </SubContainer>
      </Container>
  );
};

export default CarListItem;




/* BACKUP
import React from 'react';
import styled, { css } from 'react-emotion';
import { Button } from 'antd';

const Wrapper = styled('div')`
  display: flex;
  border: 1px solid #ccc;
  align-items: center;
  margin-bottom: 10px;
  justify-content: flex-start;
`;

const Field = styled('div')`
  width: 100%;
  flex-grow: 3;
`;
const CarInfo = styled('div')`
  display: flex;
  justify-content: flex-start;
  font-family: 'Exo 2', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px;
  background-color: ${props => props.bgColor ? props.bgColor : 'white'};
  border-bottom: ${props => props.borderBottom ? '1px solid #003166' : 0}
`;
const carNickName = css`
  font-size: 1.8rem;
`;

const carDetailItem = css`
  width: 20%;
  font-size: 1.3rem;
  @media (max-width: 1045px) {
    width: 30%;
  }
`;

const Underline = styled.span`
  border-bottom: 1px solid #003166;
`;

const FlexRight = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;
const BigButton = styled.div`
  background-color: lightblue;
  width: 150px;
`;

const CarListItem = (props) => {
  return (
      <Wrapper>
        <Field>
          <CarInfo bgColor="#cce5ff" borderBottom>
            <div className={carNickName} >
              {props.car.nickName}
            </div>
          </CarInfo>
          <CarInfo>
            <div className={carDetailItem}>Year: <Underline>{props.car.year}</Underline></div> 
            <div className={carDetailItem}>Make: <Underline>{props.car.make}</Underline></div> 
            <div className={carDetailItem}>Model: <Underline>{props.car.model}</Underline></div>
          </CarInfo>
          <CarInfo>
            <div className={carDetailItem}>Plate: <Underline>{props.car.licensePlate}</Underline> </div>
            <div className={carDetailItem}>VIN: <Underline>{props.car.VIN}</Underline></div>
          </CarInfo>
        </Field>
        <FlexRight>
          <BigButton
            onClick={() => props.onEditCar(props.car.id)}>
            Edit
          </BigButton>
          <BigButton
            onClick={() =>{ console.log('remove'); props.onRemoveCar(props.car.id)}}>
            Remove
          </BigButton>
        </FlexRight>
      </Wrapper>
  );
};

export default CarListItem;

*/