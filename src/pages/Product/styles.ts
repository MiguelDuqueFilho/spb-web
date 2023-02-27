import styled from 'styled-components';

import { Publish } from '@material-ui/icons';

export const ProductTopContainer = styled.div`
  display: flex;
`;
export const TopLeftContainer = styled.div`
  flex: 1;
`;
export const TopRightContainer = styled(TopLeftContainer)`
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const InfoTopContainer = styled.div`
  display: flex;
  align-items: center;
  .productName {
    font-weight: 600;
  }
`;
export const InfoBottomContainer = styled.div`
  margin-top: 10px;
`;
export const InfoItemContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  .productInfoValue {
    font-weight: 300;
  }
`;
export const ProductBottomContainer = styled.div`
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 10px;
    color: gray;
  }
  input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  select {
    margin-bottom: 10px;
  }
`;
export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ItemContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: indigo;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;

interface ItemShowImgProps {
  mr?: boolean;
}

export const ItemShowImg = styled.img<ItemShowImgProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${(props) => (props.mr ? '20px' : '0px')};
`;

export const ItemUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ItemUpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: midnightblue;
  color: white;
  font-weight: 600;
`;

export const ItemUpload = styled.div`
  display: flex;
  align-items: center;
`;
