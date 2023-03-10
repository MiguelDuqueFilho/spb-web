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

import {
  WbSunnyOutlined,
  NightsStayOutlined,
  Language,
  NotificationsNone,
  Settings,
} from '@material-ui/icons';

import { useContext } from 'react';
import { CustomThemeContext } from '../../contexts/CustomThemeContext';

export function NavBar() {
  const { theme, themeToggler } = useContext(CustomThemeContext);

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
          <IconContainer onClick={themeToggler}>
            {theme === 'dark' ? <WbSunnyOutlined /> : <NightsStayOutlined />}
            {/* <Switch.Root className="SwitchRoot" onClick={themeToggler}> */}

            {/* <Switch.Thumb className="SwitchThumb" /> */}

            {/* </Switch.Root> */}
          </IconContainer>
          <Avatar src={'https://github.com/MiguelDuqueFilho.png'} />
        </TopRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
}
