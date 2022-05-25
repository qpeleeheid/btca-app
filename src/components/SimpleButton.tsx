import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface SimpleButtonProps {
  title: string;
  relativePath: string;
}

const SimpleButton: FC<SimpleButtonProps> = ({ title, relativePath }) => {
  return (
    <Link
      className='my-4 py-4 px-10 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
      to={relativePath}
    >
      {title}
    </Link>
  );
};

export default SimpleButton;
