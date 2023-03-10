import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Graph from '../components/Graph';
import Sidebar from '../components/Sidebar';
import { Visualizer } from '../components';
import { algorithm as algo, speed } from '../constants';

export default function Home() {
  // Change for ZUSTAND or Context API eventually
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState(algo.bubbleSort);
  const [action, setAction] = useState('');
  const [velocity, setVelocity] = useState(speed.normal);
  const [size, setSize] = useState(25);
  const [isSorting, setSorting] = useState(false);

  useEffect(() => {
    setArray(
      Array.from({ length: size }, () => Math.floor(Math.random() * 100 + 1))
    );
  }, [size]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen p-3 flex-row flex gap-4">
        <Sidebar
          array={array}
          setArray={setArray}
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
          action={action}
          setAction={setAction}
          size={size}
          setSize={setSize}
          setVelocity={setVelocity}
          velocity={velocity}
        />
        <Visualizer array={array} algorithm={algorithm} size={size} />
      </main>
    </>
  );
}
