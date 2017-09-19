import React, { Component } from 'react';
import styled from 'styled-components';


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

function _logThis() {
  console.log('clicked');
}

const NavigationDashboard = () => {
  return (
    <div>
      <h1>Hello Dashboard</h1>
      <NavSidebar className="sidebar">
            <SidebarUl>
                <SidebarList onClick={() => {_logThis()}}>Bitcoin</SidebarList>
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
