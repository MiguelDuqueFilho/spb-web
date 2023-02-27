import styled, { css } from 'styled-components';

import {
  LineStyle,
  Timeline,
  // TrendingUp,
  PermIdentity,
  Storefront,
  // LocalAtm,
  // Assessment,
  // Drafts,
  // Feedback,
  // Forum,
  Work,
  Receipt,
  // PieChart,
} from '@material-ui/icons';

export const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background: ${({ theme }) => theme['gray-800']};
  position: sticky;
  top: 50px;
  width: 12em;
`;
export const SidebarWrapper = styled.div`
  padding: 20px;
  color: #fff;
`;
export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: #fff;
`;
export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
  a {
    text-decoration: none;
  }
`;

export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  color: #fff;
  &:hover {
    background: ${({ theme }) => theme['gray-400']};
  }
`;

/* a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme['gray-100']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme['green-500']};
    }
    &.active {
      color: ${({ theme }) => theme['green-500']};
    }
  } */

export const sharedStyle = css`
  margin-right: 5px;
  font-size: 20px !important;
  color: #fff;
`;
export const MyLineStyle = styled(LineStyle)`
  ${sharedStyle}
`;
export const MyTimeline = styled(Timeline)`
  ${sharedStyle}
`;
// export const MyTrendingUp = styled(TrendingUp)`
//   ${sharedStyle}
// `;
export const MyPermIdentity = styled(PermIdentity)`
  ${sharedStyle}
`;
export const MyStorefront = styled(Storefront)`
  ${sharedStyle}
`;
// export const MyAssessment = styled(Assessment)`
//   ${sharedStyle}
// `;
// export const MyLocalAtm = styled(LocalAtm)`
//   ${sharedStyle}
// `;
// export const MyDrafts = styled(Drafts)`
//   ${sharedStyle}
// `;
// export const MyFeedback = styled(Feedback)`
//   ${sharedStyle}
// `;
// export const MyForum = styled(Forum)`
//   ${sharedStyle}
// `;
export const MyWork = styled(Work)`
  ${sharedStyle}
`;
// export const MyPieChart = styled(PieChart)`
//   ${sharedStyle}
// `;
export const MyReceipt = styled(Receipt)`
  ${sharedStyle}
`;
