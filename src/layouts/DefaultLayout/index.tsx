import { Outlet } from 'react-router-dom';
// import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import SideBar from '../../components/SideBar';

import { OutletContainer, SidebarContainer, PageContainer } from './styles';

export function DefaultLayout() {
  // const { CloseProfileModal } = useContext(ModalsContext);

  function handleCloseProfileModal() {
    // CloseProfileModal();
  }

  return (
    <>
      <PageContainer onClick={handleCloseProfileModal}>
        <NavBar />
        <SidebarContainer>
          <SideBar />
        </SidebarContainer>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </PageContainer>
    </>
  );
}
