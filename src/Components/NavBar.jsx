import React from 'react';

const NavBar = () => {
  return (
    <div className='absolute top-0 left-0 z-20 w-full bg-transparent'>
      <div className='flex justify-between text-xl py-3 px-8 uppercase'>
        <h1>D<span>Z</span></h1>
        <nav className='space-x-3'>
          <a href='#'>About</a>
          <a href='#'>Article</a>
        </nav>
        <a href='' className='border-solid border-2 border-black p-1'>Subscribe</a>
      </div>
    </div>
  );
};

export default NavBar;
