import { lastTransctionRows } from '../dummyData';
import {
  LgWidgetButton,
  LgWidgetContainer,
  LgWidgetImg,
  LgWidgetTable,
  LgWidgetTh,
  LgWidgetTitle,
  LgWidgetUser,
  LightTd,
} from './styles';

export const LgWidget = () => {
  return (
    <LgWidgetContainer>
      <LgWidgetTitle>Latest transactions</LgWidgetTitle>
      <LgWidgetTable>
        <tr>
          <LgWidgetTh>Customer</LgWidgetTh>
          <LgWidgetTh>Date</LgWidgetTh>
          <LgWidgetTh>Ammount</LgWidgetTh>
          <LgWidgetTh>Status</LgWidgetTh>
        </tr>
        {lastTransctionRows &&
          lastTransctionRows.map((item, index) => (
            <tr key={index}>
              <LgWidgetUser>
                <LgWidgetImg src={item.avatar} alt={item.username} />
                <span>{item.username}</span>
              </LgWidgetUser>
              <LightTd>{item.date}</LightTd>
              <LightTd>{item.transaction}</LightTd>
              <td>
                <LgWidgetButton bgColor={item.bgColor} fgColor={item.fdColor}>
                  {item.type}
                </LgWidgetButton>
              </td>
            </tr>
          ))}
      </LgWidgetTable>
    </LgWidgetContainer>
  );
};
