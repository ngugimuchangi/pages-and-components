import formatData from '../utils/formatData';

export default function PlatformPerformance({ data, dataFormat }) {
  const performanceIcons = {
    up: 'icon-up.svg',
    down: 'icon-down.svg',
  };
  return (
    <div className='trend'>
        {data > 0
          ? <>
              <img className='trend__icon'
                src={`assets/images/${performanceIcons.up}`}
                alt={`${performanceIcons.up} arrow`}></img>
              <span className='trend__data text-green fs-sm fw-700'>
                {`${formatData(data)}${dataFormat}`}
              </span>
            </>
          : <>
              <img className='trend__icon'
                src={`assets/images/${performanceIcons.down}`}
                alt={`${performanceIcons.up} arrow`}></img>
              <span className='trend__data text-red fs-sm fw-700'>
                {`${formatData(data)}${dataFormat}`}
              </span>
            </>
        }
      </div>
  );
}
