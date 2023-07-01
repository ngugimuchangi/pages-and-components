import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className='back-button fs-details text-body'
      aria-label='Go to previous page'
      onClick={() => navigate(-1)}
    >
      <FontAwesomeIcon className='back-button__arrow' icon={faArrowLeftLong} aria-hidden={true} size='lg' />
      Back
    </button>
  );
}

export default BackButton;
