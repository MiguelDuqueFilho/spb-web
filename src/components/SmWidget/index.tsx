import { Visibility } from '@material-ui/icons';
import { newMemberRows } from '../dummyData';
import {
  SmWidgetButton,
  SmWidgetContainer,
  SmWidgetImg,
  SmWidgetList,
  SmWidgetTitle,
  SmWidgetUser,
} from './styles';
export const SmWidget = () => {
  return (
    <SmWidgetContainer>
      <SmWidgetTitle>New Members</SmWidgetTitle>
      <SmWidgetList>
        {newMemberRows &&
          newMemberRows.map((member) => (
            <li key={member.id} className="SmWidgetListItem">
              <SmWidgetImg src={member.avatar} alt={member.username} />
              <SmWidgetUser>
                <span className="SmWidgetUsername"> {member.username}</span>
                <span className="SmWidgetUserTitle"> {member.occupation}</span>
              </SmWidgetUser>
              <SmWidgetButton>
                <Visibility className="SmWidgetIcon" />
                Display
              </SmWidgetButton>
            </li>
          ))}
      </SmWidgetList>
    </SmWidgetContainer>
  );
};
