import { MenuItem, Select } from '@mui/material';
import React from 'react';
import Button from './Button';
import { algorithm as algo, speed } from '../constants';
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
      {/* Algoritm Selector */}
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h2>Algorithm </h2>
        <Select value={algorithm} className="w-full h-10 bg-white">
          {Object.values(algo).map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>
      {/* Array Size */}
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h2>Array Size </h2>
        <div className="flex flex-row gap-3 pt-1">
          <Button onClick={() => setSize(25)}>25</Button>
          <Button onClick={() => setSize(50)}>50</Button>
          <Button onClick={() => setSize(100)}>75</Button>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 pb-3 justify-between">
        <h2>Velocity </h2>
        <div className="flex flex-row gap-3">
          <Button onClick={() => setVelocity(speed.slow)}>Slow</Button>
          <Button onClick={() => setVelocity(speed.normal)}>Normal</Button>
          <Button onClick={() => setVelocity(speed.fast)}>Fast</Button>
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
