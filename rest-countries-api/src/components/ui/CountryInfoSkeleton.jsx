export default function CountryInfoSkeleton() {
  return (
    <>
      <div
        className='shimmer skeleton-country-flag country-info__flag'>
      </div>
      <div className='card-skeleton__text country-info__text--container'>
        <div className='country-info__text'>
          <div className='shimmer skeleton_text country-info__text__name'></div>
          <div>
            <div className='shimmer skeleton__text'></div>
            <div className='shimmer skeleton__text'></div>
            <div className='shimmer skeleton__text'></div>
            <div className='shimmer skeleton__text'></div>
            <div className='shimmer skeleton__text'></div>
          </div>
        </div>
        <div className='border-countries'>
          <span className='shimmer border-country-skeleton'></span>
          <span className='shimmer border-country-skeleton'></span>
          <span className='shimmer border-country-skeleton'></span>
        </div>
      </div>

    </>
  );
}
