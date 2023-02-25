import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';

export const TheList = styled.div`
  display: flex;
  height: 100%;
  background: white;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
export const ListImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

interface IProps {
  primary: any;
}
export const EditButton = styled.button<IProps>`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: ${(props) => (props.primary ? 'DarkMagenta' : 'SeaGreen')};
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
export const MyDeleteOutline = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;
