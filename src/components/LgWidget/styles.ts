import styled from 'styled-components';

export const LgWidgetContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px ${({ theme }) => theme['gray-800']};
  box-shadow: 0px 0px 15px -10px ${({ theme }) => theme['gray-100']};
  padding: 20px;
  background: ${({ theme }) => theme['gray-500']};
`;
export const LgWidgetTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

interface IProps {
  bgColor: any;
  fgColor: any;
}

export const LgWidgetButton = styled.button<IProps>`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || '#ebf1fe'};
  color: ${(props) => props.fgColor || '#2a7ade'};
`;

export const LgWidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
export const LgWidgetTh = styled.th`
  text-align: left;
`;
export const LgWidgetUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
export const LgWidgetImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const LightTd = styled.td`
  font-weight: 300;
`;
