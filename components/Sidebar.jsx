import { Button, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-fit w-fit border-slate-400 border-2 bg-neutral-200  rounded-md p-3">
      {/* Array Size */}
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h1>Array Size </h1>
        <Select className="w-full h-10 bg-white">
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </div>

      {/* Algoritm Selector */}
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h1>Algorithm </h1>
        <Select className="w-full h-10 bg-white">
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </div>
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h1>Velocity </h1>
        <div className="flex flex-row gap-3">
          <button className="w-20 h-10 text-white  bg-purple-500">Slow</button>
          <button className="w-20 h-10  text-white bg-purple-500">
            Normal
          </button>
          <button className="w-20 h-10  text-white bg-purple-500">Fast</button>
        </div>
        <div className=" border-t-2 border-purple-300 w-full mt-1 pt-1">
          <h1>Actions</h1>
          <div className="flex flex-row gap-3 pt-1">
            <button className="w-20 h-10 text-white  bg-purple-500">
              Sort
            </button>
            <button className="w-20 h-10  text-white bg-purple-500">
              Start
            </button>
            <button className="w-20 h-10  text-white bg-purple-500">
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
