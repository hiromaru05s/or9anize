// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './toggle';

const Header = () => {
  return (
    
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">

        <div className="flex items-center space-x-4">
            <Link href="/">
                <div className="cursor-customHover cursor-customHoverClick">Home</div>
            </Link>
        </div>
        
        <div className='flex items-center space-x-8'>
            <Link href="/blog" passHref>
                
                    <div className='cursor-customHover cursor-customHoverClick'>Blog</div>
                
            </Link>
            <Link href="/about" passHref>
                
                    <div className='cursor-customHover cursor-customHoverClick pr-4'>About</div>
                
            </Link>
            <ModeToggle />
        </div>
    </header>
  );
};

export default Header;
