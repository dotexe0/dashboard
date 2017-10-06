import React from 'react';
import { connect } from 'react-redux';
import * as grabCoinData from '../actions';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListOfCoins from './ListOfCoins';

//styled components
const SideBarNav = styled.nav`
  display: inline-block;
  float: left;
`;

const NavSidebar = styled.nav`
  float: left;
`;

const SidebarUl = styled.ul`
  float: left;
  background-color: #46B3F2;
  padding-right: 1em;
  padding-left: 1em;
`;
const SidebarList = styled.li`
    text-transform: uppercase;
    margin-top: 20px;
    list-style: none;
    text-align: left;
    border-bottom: 5px solid #394648;
    border-radius: 5px;
`;

function _grabChartData(e) {
  e.preventDefault();
  const link = e.currentTarget.textContent;
  console.log('...grabbing chart data', e.currentTarget.textContent);


  // console.log('this.refs', props)
}

// stateless component, renders list of coins to choose from
const NavigationDashboard = (props) => {
  // console.log(this.props);
  return (
    <div>
      <NavSidebar className="sidebar">
        <SidebarUl>
        { Object.keys(ListOfCoins).map((coin, i) =>
          <SidebarList key={i} onClick={ (e)=> _grabChartData(e) }>{coin}</SidebarList>
        )}
        </SidebarUl>
      </NavSidebar>
      <table className="table table-hover">
      <thead>
        <tr>
          <th>Twitter</th>
          <th>Reddit</th>
          <th>Facebook</th>
          <th>Instagram</th>
        </tr>
      </thead>
    </table>
    </div>
  )
}

const mapStateToProps = state => {
  return { state };
}

export default connect(null, { grabCoinData })(NavigationDashboard)
