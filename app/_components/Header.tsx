import Link from 'next/link';
import { Search, Menu, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className=" px-16 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-4 border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="border-r pr-4">Anywhere</div>
            <div className="border-r pr-4">Any week</div>
            <div className="pr-2">Add guests</div>
            <div className="bg-rose-500 p-2 rounded-full text-white">
              <Search size={16} />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:block hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
              <Link href="/host">Airbnb your home</Link>
            </div>
            <div className="hover:bg-gray-100 p-2 rounded-full cursor-pointer">
              <Globe size={20} />
            </div>
            <div className="flex items-center space-x-2 border rounded-full p-2 cursor-pointer hover:shadow-md">
              <Menu size={20} />
              <div className="bg-gray-500 rounded-full p-2">
                <div className="text-white">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}