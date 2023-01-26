'use client';

import { valueToPercent } from '@mui/base';
import React, { useEffect, useState } from 'react';

const Visualizer = (props) => {
  const { array, setArray, algorithm, setAlgorithm, action, setAction } = props;

  return (
    <div className="h-fit w-full flex flex-col border-slate-400 border-2 bg-neutral-200  rounded-md p-3 items-center">
      <h1 className="text-3xl pb-3">Algorithm</h1>

      <div className="w-full ">
        <div className="flex flex-row items-end w-full bg-slate-600 gap-[1.5px] ">
          {array?.map((item) => {
            return (
              <div
                className="flex flex-col min-w-0 font- w-full items-center"
                key=""
              >
                <span className="text-sm w">{item}</span>
                <div
                  className={`bg-red-400 mx-[1px] w-full text-center`}
                  style={{ height: `${item * 3.5}px` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
