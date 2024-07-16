'use client';

import Image from 'next/image';

import ButtonLayout from './components/ButtonLayout';
import SearchBar from './components/SearchBar';

const Header: React.FC = () => {
  const handleSubscribe = () => {
    console.log('Subscribe'); // TODO - Implements subscribe action
  };

  const handleSignIn = () => {
    console.log('sign in'); // TODO - Implements sign in action
  };

  return (
    <div className="h-[64px] flex flex-row justify-between items-center p-4 px-6 border-b-[0.5px] border-slate-300">
      <div className="flex flex-row gap-8">
        <Image src="logo.svg" alt="Logo" width={32} height={32} />

        <SearchBar />
      </div>

      <ButtonLayout
        handleSubscribe={handleSubscribe}
        handleSignIn={handleSignIn}
      />
    </div>
  );
};

export default Header;
