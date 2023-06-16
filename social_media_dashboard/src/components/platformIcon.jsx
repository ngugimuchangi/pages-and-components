import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import youtubeIcon from '../assets/images/icon-youtube.svg';

export default function PlatformIcon({ platform, size }) {
  const platformIcons = {
    facebook: facebookIcon,
    instagram: instagramIcon,
    twitter: twitterIcon,
    youtube: youtubeIcon,
  };

  const { width, height } = size;
  return (
    <img src={platformIcons[platform]}
      alt={`${platform} icon`}
      width={width}
      height={height}
      ></img>
  );
}
