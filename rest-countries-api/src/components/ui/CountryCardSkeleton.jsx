/**
 * Skeleton for country card
 * @returns
 */
export default function CountryCardSkeleton() {
  return (
    <div className='col card-skeleton'>
      <div className='shimmer card-skeleton__img'>
      </div>
      <div className='card-skeleton__text'>
        <div className='shimmer skeleton__text'></div>
        <div className='shimmer skeleton__text'></div>
        <div className='shimmer skeleton__text'></div>
        <div className='shimmer skeleton__text'></div>
      </div>
    </div>
  );
}
