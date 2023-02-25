import { ArrowUpward } from '@material-ui/icons';
import { featureData } from '../dummyData';
import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedMoneyContainer,
  FeaturedSub,
  FeaturedTitle,
} from './styles';

export const Feature = () => {
  return (
    <FeaturedContainer>
      {featureData &&
        featureData.map((item, index) => (
          <FeaturedItem key={index}>
            <FeaturedTitle>{item.title}</FeaturedTitle>
            <FeaturedMoneyContainer>
              <span className="featuredMoney">{item.money}</span>
              <span className="featuredMoneyRate">
                {item.moneyRate} <ArrowUpward className="featuredIcon" />
              </span>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compare to Previous month</FeaturedSub>
          </FeaturedItem>
        ))}
    </FeaturedContainer>
  );
};
