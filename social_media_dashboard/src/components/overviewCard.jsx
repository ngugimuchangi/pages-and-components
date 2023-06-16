import OverviewCardTitle from './overviewCardTitle.jsx';
import OverviewCardStats from './overviewCardStats.jsx';
import '../assets/styles/cards.scss';

export default function OverviewCard({
  platform, category, data, trendData,
}) {
  return (
    <div className='card col overview-card'>
      <OverviewCardTitle platform={platform} category={category}/>
      <OverviewCardStats data={data} trendData={trendData}/>
    </div>
  );
}
