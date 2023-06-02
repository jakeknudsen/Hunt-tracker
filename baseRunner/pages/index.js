import React from 'react';
import styles from './home.module.css';
import Head from 'next/head';
import Nav from '../components/nav';
import Link from 'next/link';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className={styles.homeContainer}>
      <h1 className="title">Welcome to BaseRunner!</h1>
      <h2 className="sub-title">
        Changing the way you track stats, scores and teams
      </h2>
      <Link href="/game-tracker">
        <button className={styles.primaryBtn}>Start New Game</button>
      </Link>
    </div>
  </div>
);

export default Home;
