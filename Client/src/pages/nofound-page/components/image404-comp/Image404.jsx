import { Logo } from '@/components';
import {
  ArrowIcon,
  BlockIcon,
  SearchIcon,
  LgWin,
  MdWin,
  SmWin,
} from '@/assets/svg';
import './image404.scss';

export function Image404() {
  return (
    <div className='image-404'>
      <Logo />
      <div className='blockIcon block'>
        <BlockIcon />
      </div>
      <div className='searchIcon block'>
        <SearchIcon />
      </div>
      <LgWin className='lgwin' />
      <MdWin className='mdwin' />
      <SmWin className='smwin' />
      <ArrowIcon className='arrowIcon' />
      <div className='square square1'></div>
      <div className='square square2'></div>
      <div className='square square3'></div>
      <div className='line line1'></div>
      <div className='line line2'></div>
      <div className='line line3'></div>
    </div>
  );
}
