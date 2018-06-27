import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import styled, { css, cx } from 'react-emotion';
import { State } from 'react-powerplug';
import { Button } from 'antd';

import ServiceList from './ServiceList';
import ServiceListFilters from './ServiceListFilters';

const Fragment = React.Fragment;

const Container = styled.div`
  max-width: 80rem;
  padding: 0 1.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  box-shadow: 0 0 5px black;
  background-color: #B7D1E5;
}`;

const DashHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ServiceDashboard = () => (
  <State initial={{ redirect: false, to: ''}}>
    {({state, setState}) => {
        return (
          <Fragment>
            <Container>
              <DashHeader>
                { state.redirect ? <Redirect to={state.to} /> : null }
                <h1 style={{margin: "1rem", flexGrow: "2"}}>Service Dashboard</h1>
                <Button style={{marginRight: "5px"}} type='primary' onClick={() => setState({ redirect: true, to: '/create'})}>Add Service</Button>
                <Button type='primary' onClick={() => setState({ redirect: true, to: '/addcar'})}>Cars</Button>
              </DashHeader>
            </Container>
            <ServiceListFilters />
            <ServiceList />
          </Fragment>
        );
      }
    }
  </State>
  );

export default ServiceDashboard;
