import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface SimpleLinkProps {
  title: string;
  relativePath: string;
}

const SimpleLink: FC<SimpleLinkProps> = ({ title, relativePath }) => {
  return (
    <Link
      className='underline text-blue hover:text-dark-blue'
      to={relativePath}
    >
      {title}
    </Link>
  );
};

export default SimpleLink;
