import PlatformIcon from './platformIcon.jsx';

export default function OverviewCardTitle({ platform, category }) {
  const viewTitle = {
    facebook: 'Page Views',
    twitter: 'Retweets',
    instagram: 'Profile Views',
    youtube: 'Total Views',
  };
  const iconSize = { width: 20, height: 20 };
  return (
    <div className='overview-card-header flex-row'>
      <div className='overview-card-header__title text-primary-clr fs-sm fw-700'>
        <span>{category === 'Likes' ? category : viewTitle[platform]}</span>
      </div>
      <PlatformIcon platform={platform} size={iconSize}/>
    </div>
  );
}
