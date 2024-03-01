import formatData from '../utils/formatData';
import PlatformPerformance from './platformPerformance.jsx';

export default function OverviewCardStats({ data, trendData }) {
  return (
    <div className='overview-card-stats flex-row'>
      <span className='text-secondary-clr fs-md fw-700'>{ formatData(data) }</span>
      <PlatformPerformance data={trendData} dataFormat='%'/>
    </div>
  );
}
