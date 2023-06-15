import OverviewCard from './overviewCard.jsx';

export default function OverviewSection({ platforms }) {
  const overviewCards = [];
  platforms.forEach((userDetails) => {
    const { platform } = userDetails;
    const { viewsOrRetweets, viewsOrRetweetsPerformance } = userDetails;
    const { Likes, LikesPerformance } = userDetails;

    const viewsCard = <OverviewCard key={`${platform}Views`}
                        platform={platform}
                        category='Views'
                        data={viewsOrRetweets}
                        trendData={viewsOrRetweetsPerformance}
                    />;
    const likesCard = <OverviewCard
                        key={`${platform}Likes`}
                        platform={platform}
                        category='Likes'
                        data={Likes}
                        trendData={LikesPerformance}
                      />;
    if (['instagram', 'youtube'].includes(platform)) {
      overviewCards.push(likesCard);
      overviewCards.push(viewsCard);
      return;
    }
    overviewCards.push(viewsCard);
    overviewCards.push(likesCard);
  });

  return (
    <div className='overview-section'>
      <div className='container'>
        <h2 className=' overview-title text-primary-clr fs-md fw-700 '>Overview - Today</h2>
        <div className='cards-container flex-row'>
          { overviewCards }
        </div>
      </div>
    </div>
  );
}
