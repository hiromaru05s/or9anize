// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <Link href="/">
                <div className="cursor-customHover cursor-customHoverClick">Home</div>
            </Link>
        </div>
        
        <div className='flex items-center space-x-4'>
            <Link href="/blog" >
                
                    <div className='cursor-customHover cursor-customHoverClick'>Blog</div>
                
            </Link>
            <Link href="/about" >
                
                    <div className='cursor-customHover cursor-customHoverClick'>About</div>
                
            </Link>
      
            <div className='flex items-center space-x-4 pr-4'>
                {/* 言語切り替えのためのリンクを追加 */}
                <button className="mx-2">EN</button>
                <button className="mx-2">JP</button>
                <button className="mx-2">KR</button>
            </div>
        </div>
    </header>
  );
};

export default Header;
