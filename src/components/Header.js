import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='Amazon Logo'
      />

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLine1'>Hello, Guest</span>
          <span className='header__optionLine2'>Sign in</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLine1'>Returns</span>
          <span className='header__optionLine2'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLine1'>Your</span>
          <span className='header__optionLine2'>Prime</span>
        </div>

        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLine2 header__basketCount'>0 </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
