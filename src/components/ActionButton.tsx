import React, { FC } from 'react';

interface ActionButtonProps {
  text: string;
  handleAction: Function;
}

const ActionButton: FC<ActionButtonProps> = ({ text, handleAction }) => {
  return (
    <button
      className='py-4 px-8 mx-auto rounded bg-blue text-white hover:bg-dark-blue'
      onClick={() => handleAction()}
    >
      {text}
    </button>
  );
};

export default ActionButton;
