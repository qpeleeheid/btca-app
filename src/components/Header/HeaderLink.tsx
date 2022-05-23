import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderLinkProps {
  title: string;
  path: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ title, path }) => {
  return (
    <NavLink className='mx-2 p-1 rounded text-white relative group' to={path}>
      <span>{title}</span>
      <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded transition-all group-hover:w-full'></span>
    </NavLink>
  );
};

export default HeaderLink;
