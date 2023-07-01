/**
 * Country details fields
 */
function Info({ infoTitle, children }) {
  return (
    <pre className='info'>
      <span className='info__title text-body fw-600'>{`${infoTitle}: `}</span>
      <span
        className='info__details text-body fw-300'>{children}</span>
    </pre>
  );
}

export default Info;
