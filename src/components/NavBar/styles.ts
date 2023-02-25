import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;

  grid-area: Nav;
  background: ${({ theme }) => theme['gray-800']};

  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
`;

export const TopLeft = styled.div``;
export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

export const IconBadge = styled.span`
  width: 12px;
  height: 12px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: yellow;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
`;

export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
`;
