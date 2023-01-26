import React from 'react';

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className=" rounded w-20 h-10 text-white  bg-purple-500 active:bg-purple-800 active:bg-purple-300 hover:bg-slate-50 hover:text-purple-600 transition-all hover:border-purple-600 hover:border-2"
    >
      {children}
    </button>
  );
};

export default Button;
