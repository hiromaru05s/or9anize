// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './toggle';

const Header = () => {
  return (
<header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-white shadow-custom p-4">
<div className="flex items-center space-x-4">
            <Link href="/">
                <div className="cursor-customHover cursor-customHoverClick">
                    <img src="/home.png" alt="Logo" className="w-24 h-8.5" />
                </div>
            </Link>
        </div>
<div className='flex items-center space-x-4'>
            <Link href="/Scraps" passHref>
                
                    <div className='cursor-customHover cursor-customHoverClick text-black px-4 py-2'>Scraps</div>
                
            </Link>
            <Link href="/Notes" passHref>
                
                    <div className='cursor-customHover cursor-customHoverClick text-black px-4 py-2'>Notes</div>
                
            </Link>
            </div>
<Link
  className="cursor-customHover cursor-customHoverClick inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  href="/sign-in"
>
  Sign In
</Link>
</header>



  );
};

export default Header;
