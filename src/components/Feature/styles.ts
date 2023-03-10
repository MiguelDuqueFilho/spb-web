import styled from 'styled-components';

export const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ theme }) => theme['gray-500']};
  box-shadow: 0px 0px 15px -10px ${({ theme }) => theme['gray-100']};
`;
export const FeaturedTitle = styled.span`
  font-size: 20px;
`;
export const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }
  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .featuredIcon {
    font-size: 16px;
    margin-left: 5px;
    color: green;
  }
  .featuredIcon.negative {
    color: red;
  }
`;
export const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;
