import { Header as HeaderContainer } from '../styles/components/header';
import Image from 'next/image';

import { useState, useContext } from 'react';
import { PurchaseContext } from '../contexts/Purchase';

import { Nav } from './Nav';

import { BsFillBagFill } from 'react-icons/bs';

import logoImg from '../assets/logo.svg';

export const Header = () => {
  const { cart } = useContext(PurchaseContext);

  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(false);
  };

  const handleOpenNav = () => {
    setShowNav(true);
  };

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo" />
      <button onClick={handleOpenNav}>
        <BsFillBagFill />
        {cart.length > 0 && <span>{cart.length}</span>}
      </button>

      <Nav show={showNav} closeNav={closeNav} />
    </HeaderContainer>
  );
};