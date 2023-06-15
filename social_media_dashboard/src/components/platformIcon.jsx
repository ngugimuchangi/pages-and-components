export default function PlatformIcon({ platform, size }) {
  const platformIcons = {
    facebook: 'icon-facebook.svg',
    instagram: 'icon-instagram.svg',
    twitter: 'icon-twitter.svg',
    youtube: 'icon-youtube.svg',
  };
  const { width, height } = size;
  return (
    <img src={`assets/images/${platformIcons[platform]}`}
      alt={`${platform} icon`}
      width={width}
      height={height}
      ></img>
  );
}
