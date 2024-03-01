import formatData from '../utils/formatData';
import upIcon from '../assets/images/icon-up.svg';
import downIcon from '../assets/images/icon-down.svg';

export default function PlatformPerformance({ data, dataFormat }) {
  return (
    <div className='trend'>
        {data > 0
          ? <>
              <img className='trend__icon'
                src={upIcon}
                alt='up arrow'></img>
              <span className='trend__data text-green fs-sm fw-700'>
                {`${formatData(data)}${dataFormat}`}
              </span>
            </>
          : <>
              <img className='trend__icon'
                src={downIcon}
                alt='down arrow'></img>
              <span className='trend__data text-red fs-sm fw-700'>
                {`${formatData(data)}${dataFormat}`}
              </span>
            </>
        }
      </div>
  );
}
