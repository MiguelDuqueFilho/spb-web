import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;

  grid-area: Nav;
  background: ${({ theme }) => theme.colors.gray2};

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

  button {
    all: unset;
  }

  .SwitchRoot {
    width: 35px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.gray1};
    border-radius: 9999px;
    position: relative;
    box-shadow: 0 2px 6px ${({ theme }) => theme.colors.gray11};
    -webkit-tap-highlight-color: ${({ theme }) => theme.colors.gray6};
  }
  .SwitchRoot:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray10};
  }
  .SwitchRoot[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.gray12};
  }

  .SwitchThumb {
    display: block;
    width: 14px;
    height: 14px;
    background-color: ${({ theme }) => theme.colors.gray10};
    border-radius: 9999px;
    box-shadow: 0 2px 2px ${({ theme }) => theme.colors.gray12};
    transition: transform 100ms;
    transform: translateX(2px);
    will-change: transform;
  }
  .SwitchThumb[data-state='checked'] {
    transform: translateX(19px);
  }
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
