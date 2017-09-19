import React from 'react';
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
  // e.preventDefault();
  console.log('...grabbing chart data', e);
}

// stateless component, renders list of coins to choose from
const NavigationDashboard = () => {
  // console.log(this.props);
  return (
    <div>
      <NavSidebar className="sidebar">
        <SidebarUl>
        { Object.keys(ListOfCoins).map((coin, i) =>
          <SidebarList key={i} onClick={ ()=> _grabChartData(this) }>{coin}</SidebarList>
        )}
        </SidebarUl>
      </NavSidebar>
    </div>
  )
}

export default NavigationDashboard;
