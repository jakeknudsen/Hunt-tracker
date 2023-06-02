import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addAllOrganizations} from '../store/reducer/gameTracker';
import Link from 'next/link';
import GamePage from '../components/Game';
import Nav from '../components/nav';
import axios from 'axios';
import styles from './home.module.css'

// Drop down selecter to select league/tournament series or affiliation for teams
// Drop down selecter to select team form that organization

export default function GameTracker() {
  const [allOrganizations, setAllOrganizations] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    allOrganizations.length === 0
      ? axios.get('/api/getFakerOrgz').then((res) => {
          setAllOrganizations(res.data);
          dispatch(addAllOrganizations(res.data));
        })
      : null;

    selectedOrganization
      ? axios.get('/api/getFakerTeams').then((res) => {
          setAllTeams(res.data);
        })
      : null;
  }, [selectedOrganization]);

  return (
    <>
      <Nav />
      <GamePage
        allOrganizations={allOrganizations}
        setSelectedOrganization={setSelectedOrganization}
        selectedOrganization={selectedOrganization}
        allTeams={allTeams}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        setAwayTeam={setAwayTeam}
        setHomeTeam={setHomeTeam}
      />{' '}
      <div className={styles.homeBtnContainer}>
      <button className={styles.secondaryBtn}>
        <Link href="/">Cancel</Link>
      </button>
      
        <button className={styles.primaryBtn} disabled={homeTeam && awayTeam ? false : true}>
        <Link href="/live-game">Next</Link>
        </button>
      </div>
      
    </>
  );
}
