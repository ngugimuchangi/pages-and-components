import DashboardHeader from './components/dashboardHeader.jsx';
import FollowersSection from './components/followers.jsx';
import OverviewSection from './components/overview.jsx';
import './assets/styles/index.scss';

export default function App() {
  const facebook = {
    platform: 'facebook',
    username: '@nathanf',
    followers: 1987,
    followersToday: 12,
    viewsOrRetweets: 87,
    viewsOrRetweetsPerformance: 3,
    Likes: 52,
    LikesPerformance: -2,
  };
  const twitter = {
    platform: 'twitter',
    username: '@nathanf',
    followers: 1044,
    followersToday: 99,
    viewsOrRetweets: 117,
    viewsOrRetweetsPerformance: 303,
    Likes: 507,
    LikesPerformance: 553,
  };
  const instagram = {
    platform: 'instagram',
    username: '@realnathanf',
    followers: 11000,
    followersToday: 1099,
    viewsOrRetweets: 52000,
    viewsOrRetweetsPerformance: 1375,
    Likes: 5462,
    LikesPerformance: 2257,
  };
  const youtube = {
    platform: 'youtube',
    username: 'Nathan F.',
    followers: 8239,
    followersToday: -144,
    viewsOrRetweets: 1407,
    viewsOrRetweetsPerformance: -12,
    Likes: 107,
    LikesPerformance: -19,
  };

  return (
    <>
      <DashboardHeader totalFollowers='23,004'/>
      <main>
        <FollowersSection platforms={[facebook, twitter, instagram, youtube]}/>
        <OverviewSection platforms={[facebook, twitter, instagram, youtube]}/>
      </main>
    </>

  );
}
