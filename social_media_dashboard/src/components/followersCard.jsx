import PlatformIcon from './platformIcon.jsx';
import PlatformPerformance from './platformPerformance.jsx';
import formatData from '../utils/formatData';
import '../assets/sass/cards.scss';

export default function FollowersCard({ userDetails }) {
  const {
    platform, username, followers, followersToday,
  } = userDetails;
  const iconSize = { width: 20, height: 20 };
  return (
    <div className={`card col followers-card ${platform}`}>
      <div className='followers__header'>
        <PlatformIcon platform={platform} size={iconSize}/>
        <span className='followers__header__username text-primary-clr fs-sm fw-700'>{username}</span>
      </div>
      <div className='followers__count'>
        <div className='followers__count__stats text-secondary-clr fs-xl fw-700'>{formatData(followers)}</div>
        <div className='followers__count__label text-primary-clr fs-sm'> {platform === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}</div>
      </div>
      <PlatformPerformance data={followersToday} dataFormat=' Today'/>
    </div>
  );
}
