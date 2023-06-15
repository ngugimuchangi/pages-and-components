import FollowersCard from './followersCard.jsx';

export default function FollowersSection({ platforms }) {
  const followersCards = platforms.map((userDetails) => (
    <FollowersCard key={userDetails.platform} userDetails={userDetails}/>));
  return (
    <div className='followers-section'>
      <div className='container flex-row'>
        {followersCards}
      </div>
    </div>
  );
}
