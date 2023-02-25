import {
  Avatar,
  IconBadge,
  IconContainer,
  Logo,
  NavbarContainer,
  NavbarWrapper,
  TopLeft,
  TopRight,
} from './styles';

import { Language, NotificationsNone, Settings } from '@material-ui/icons';

export function NavBar() {
  const rndNmr = () => Math.floor(Math.random() * 99) + 1;
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <TopLeft>
          <Logo>SPB</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>5</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Avatar src={'https://github.com/MiguelDuqueFilho.png'} />
        </TopRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
}
