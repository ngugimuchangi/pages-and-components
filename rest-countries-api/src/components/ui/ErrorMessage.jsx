import { Link } from 'react-router-dom';
import Image from './Image.jsx';
import ErrorImage from '../../assets/images/404.svg';

/**
 * Handles errors from calls to route loaders
 */
export default function ErrorMessage({ message, errorHeader, imgSrc = ErrorImage }) {
  return (
    <div className='error-wrapper text-body'>
      <Image src={`${imgSrc}#svgView(preserveAspectRatio(none))`} />
      <h2 className='error__header fs-lg fw-900'>{errorHeader || 'Oops!'}</h2>
      <p className='error__message fs-md fw-600 text-light-gray'>{message || 'Sorry, something went wrong.'}</p>
      <Link className='error__back-home text-body fs-details fw-600' to={'/'}>Home</Link>
    </div>);
}
