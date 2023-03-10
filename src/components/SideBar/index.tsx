import React from 'react';

import { NavLink } from 'react-router-dom';

import {
  MyLineStyle,
  MyPermIdentity,
  MyReceipt,
  MyStorefront,
  MyTimeline,
  MyWork,
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  SidebarMenu,
  SidebarTitle,
  SidebarWrapper,
} from './styles';
const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <NavLink to="/" title="Home">
              <SidebarListItem>
                <MyLineStyle />
                <span>Home</span>
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>All Menu</SidebarTitle>
          <SidebarList>
            <NavLink to="/users" title="Users">
              <SidebarListItem>
                <MyPermIdentity />
                <span>Users</span>
              </SidebarListItem>
            </NavLink>
            <NavLink to="/messages" title="Envio de mensagens SPB">
              <SidebarListItem>
                <MyTimeline />
                <span>Messages</span>
              </SidebarListItem>
            </NavLink>
            <NavLink to="/history" title="Histórico de mensages">
              <SidebarListItem>
                <MyReceipt />
                <span>History</span>
              </SidebarListItem>
            </NavLink>
            <NavLink to="/products" title="Products">
              <SidebarListItem>
                <MyStorefront />
                <span>Products</span>
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Configurations</SidebarTitle>
          <SidebarList>
            <NavLink to="/configurations" title="Configuração">
              <SidebarListItem>
                <MyWork />
                <span>Configurations</span>
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default SideBar;
