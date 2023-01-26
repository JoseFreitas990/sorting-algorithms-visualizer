import { MenuItem, Select } from '@mui/material';
import React from 'react';
import Button from './Button';

const Sidebar = (props) => {
  const {
    array,
    setArray,
    size,
    setSize,
    algorithm,
    action,
    velocity,
    setVelocity,
  } = props;

  function generateNewArray() {
    setArray(
      Array.from({ length: size }, () => Math.floor(Math.random() * size + 1))
    );
  }

  return (
    <div className="h-fit w-fit border-slate-400 border-2 bg-neutral-200  rounded-md p-3">
      {/* Array Size */}
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h2>Array Size </h2>
        <Select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full h-10 bg-white"
        >
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </div>

      {/* Algoritm Selector */}
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h2>Algorithm </h2>
        <Select className="w-full h-10 bg-white">
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </div>
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h2>Velocity </h2>
        <div className="flex flex-row gap-3">
          <Button>Slow</Button>
          <Button>Normal</Button>
          <Button>Fast</Button>
        </div>
        <div className=" border-t-2 border-purple-300 w-full mt-1 pt-1">
          <h2>Actions</h2>
          <div className="flex flex-row gap-3 pt-1">
            <Button onClick={generateNewArray}>Sort</Button>
            <Button>Start</Button>
            <Button>Restart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
