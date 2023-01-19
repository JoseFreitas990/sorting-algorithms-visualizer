import React from 'react';

const Graph = (props) => {
  const { array } = props;
  return (
    <div className="flex h-1/2 bg-red-200 relative">
      {array?.map((value, index) => {
        return (
          <div
            className={`m-0.5 bg-cyan-500 rounded-lg w-3 mt-auto`}
            style={{ height: `${value}%` }}
            key={`${value}-${Math.random() * 3}`}
          />
        );
      })}
    </div>
  );
};

export default Graph;
