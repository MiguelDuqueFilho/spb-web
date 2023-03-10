import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 42px;

  grid-area: Nav;
  background: ${({ theme }) => theme.colors.gray3};

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
  color: ${({ theme }) => theme.colors.gray12};
  cursor: pointer;
`;

export const TopLeft = styled.div``;
export const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.gray12};

  button {
    all: unset;
  }

  .SwitchRoot {
    width: 36px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.gray2};
    border-radius: 9999px;
    position: relative;
    border-style: solid;
    border-width: 1px;

    /* box-shadow: 0 2px 6px ${({ theme }) => theme.colors.gray3};
    -webkit-tap-highlight-color: ${({ theme }) => theme.colors.gray3}; */
  }
  /* .SwitchRoot:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray12};
  } */
`;

export const IconBadge = styled.span`
  width: 12px;
  height: 12px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: ${({ theme }) => theme.colors.orange10};
  color: ${({ theme }) => theme.colors.gray12};
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
