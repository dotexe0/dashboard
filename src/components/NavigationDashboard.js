import React from 'react';
import styled from 'styled-components';
// import ListOfCoins from './ListOfCoins';

const SideBarNav = styled.nav`
  display: inline-block;
  float: left;
`;

const NavSidebar = styled.nav`
  float: left;
`;

const SidebarUl = styled.ul`
  float: left;
`;
const SidebarList = styled.li`
    text-transform: uppercase;
    margin-top: 20px;
    list-style: none;
    text-align: left;
`;

function _grabChartData() {
  console.log('...grabbing chart data');
}

// const coins = (ListOfCoins) => { ListOfCoins.map((coin) => {<SidebarList>{Object.keys(coin)}</SidebarList>}) }

const NavigationDashboard = () => {
  return (
    <div>
      <NavSidebar className="sidebar">
        <SidebarUl>
          <SidebarList onClick={() => {_grabChartData()}}>Bitcoin</SidebarList>
          <SidebarList>Ethereum</SidebarList>
          <SidebarList>Litecoin</SidebarList>
          <SidebarList>Monero</SidebarList>
          <SidebarList>Neo</SidebarList>
          <SidebarList>Golem</SidebarList>
          <SidebarList>OmiseGO</SidebarList>
          <SidebarList>Augur</SidebarList>
          <SidebarList>BitcoinCash</SidebarList>
        </SidebarUl>
      </NavSidebar>
    </div>
  )
}

export default NavigationDashboard;
