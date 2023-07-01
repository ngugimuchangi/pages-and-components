import CountryCardSkeleton from '../../../components/ui/CountryCardSkeleton.jsx';

// Country card skeletons for home page
export default function CountryCardSkeletons() {
  const cardSkeletons = Array(10)
    .fill(0)
    .map((_, index) => <CountryCardSkeleton key={index} />);

  return (
    <div className='flex flex-row flex-wrap cards-section'>
      {cardSkeletons}
    </div>
  );
}
