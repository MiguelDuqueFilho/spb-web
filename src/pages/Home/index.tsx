import { Chart } from '../../components/Chart';
import { Feature } from '../../components/Feature';
import { HomeContainer, HomeWidgets } from './styles';
import { userData } from '../../components/dummyData';
import { SmWidget } from '../../components/SmWidget';
import { LgWidget } from '../../components/LgWidget';

export function Home() {
  return (
    <HomeContainer>
      <Feature />
      <Chart
        data={userData}
        title="User Analystics"
        grid
        dataKey="Active User"
      />
      <HomeWidgets>
        <SmWidget />
        <LgWidget />
      </HomeWidgets>
    </HomeContainer>
  );
}
